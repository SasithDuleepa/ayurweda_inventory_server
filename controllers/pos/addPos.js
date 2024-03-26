const util = require('util');
const DB = require('./../../config/Database');
const query = util.promisify(DB.connection.query).bind(DB.connection);

const AddPos = async (req, res) => {
    console.log(req.body);
    const { pos_id, branch_id, pos_date, pos_user_id, pos_type, customer_id,pos_status, item_data ,pos_sub_total,pos_discount,pos_net_total,pos_cash,pos_change } = req.body;

    try {
        if (pos_id !== '' && pos_user_id !== '' && pos_type !== '' && pos_status !== '' && item_data.length > 0) {
            const insertPosQuery = `INSERT INTO pos (pos_id, branch_id, pos_date, pos_user_id, pos_type, pos_status, customer_id,pos_sub_total,pos_discount,pos_net_total,pos_cash,pos_change) VALUES (?,?,?,?,?,?, ?, ?, ?, ?, ?, ?)`;
            await query(insertPosQuery, [pos_id, branch_id, pos_date, pos_user_id, pos_type, pos_status, customer_id,pos_sub_total,pos_discount,pos_net_total,pos_cash,pos_change]);

            await Promise.all(item_data.map(async (item) => {
                const insertPosItemsQuery = `INSERT INTO pos_items (pos_id, inventory_batch_id, pos_item_qty, pos_items_price) VALUES (?, ?, ?, ?)`;
                await query(insertPosItemsQuery, [pos_id, item.inventory_id, item.item_qty, item.item_price]);
            }));

            //reduce
            const reduceInventoryQuery = `UPDATE inventory SET current_qty = current_qty - ? ,shadow_qty = shadow_qty - ?  WHERE inventory_batch_id = ?`;
            await Promise.all(item_data.map(async (item) => {
                await query(reduceInventoryQuery, [item.item_qty, item.item_qty, item.inventory_id]);
            }
            ));

            console.log('POS added successfully.');
            res.status(200).json({ message: 'POS added successfully.' });
        } else {
            throw new Error('Required fields are missing or item data is empty.');
        }
    } catch (error) {
        console.error('Error adding POS:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = AddPos;
