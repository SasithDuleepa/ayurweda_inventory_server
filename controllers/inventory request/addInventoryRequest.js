const util = require('util');
const DB = require('./../../config/Database');
const queryAsync = util.promisify(DB.connection.query).bind(DB.connection);

const AddInventoryRequest = async (req, res) => {
    console.log(req.body);
    const {
        inventory_request_type,
        inventory_request_id,
        inventory_request_user_id,
        inventory_request_date,
        inventory_request_status,
        inventory_request_items,
        inventory_request_description
    } = req.body;

    if (inventory_request_id !== '' && inventory_request_user_id !== '' && inventory_request_date !== '' && inventory_request_items.length > 0) {
        try {
            if (inventory_request_type === 'ITEM') {
                // Reduce item from inventory
                await Promise.all(inventory_request_items.map(async (item) => {
                    const sql1 = `UPDATE inventory SET shadow_qty = shadow_qty - ${item.qty} WHERE inventory_batch_id = '${item.item_inventory_batch_id}'`;
                    await queryAsync(sql1);
                }));

                // Add items
                const sql = `INSERT INTO inventory_request (inventory_request_id,inventory_request_user_id,inventory_request_date,inventory_request_status,inventory_request_description) VALUES (?,?,?,?,?)`;
                await queryAsync(sql, [inventory_request_id, inventory_request_user_id, inventory_request_date, inventory_request_status, inventory_request_description]);

                // Add items
                await Promise.all(inventory_request_items.map(async (item) => {
                    const sql = `INSERT INTO inventory_request_items (inventory_request_id, inventory_batch_id, inventory_request_item_qty) VALUES (?, ?, ?)`;
                    await queryAsync(sql, [inventory_request_id, item.item_inventory_batch_id, item.qty]);
                }));

                res.status(200).json({ message: "Inventory Request Added Successfully" });
            } else {
                const sql = `INSERT INTO inventory_request (inventory_request_id,inventory_request_user_id,inventory_request_date,inventory_request_status,inventory_request_description) VALUES (?,?,?,?,?)`;
                await queryAsync(sql, [inventory_request_id, inventory_request_user_id, inventory_request_date, inventory_request_status, inventory_request_description]);

                // Add items
                await Promise.all(inventory_request_items.map(async (item) => {
                    const sql = `INSERT INTO inventory_request_items (inventory_request_id, inventory_batch_id, inventory_request_item_qty) VALUES (?, ?, ?)`;
                    await queryAsync(sql, [inventory_request_id, item.item_inventory_batch_id, item.qty]);
                }));

                res.status(200).json({ message: "Inventory Request Added Successfully" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to add inventory request" });
        }
    } else {
        res.status(400).json({ error: "Incomplete or invalid inventory request data" });
    }
};

module.exports = AddInventoryRequest;
