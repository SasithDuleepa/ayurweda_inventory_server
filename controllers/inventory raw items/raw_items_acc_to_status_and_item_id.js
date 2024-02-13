const DB = require('../../config/Database');

const RawItemsAccToStatusAndItemId = (req,res) => {
    const { status, id } = req.params;
    if(status && id ){
        const sql = `SELECT inventory_store_raw_items.*,raw_item.*
        FROM inventory_store_raw_items
        INNER JOIN raw_item ON inventory_store_raw_items.raw_item_id = raw_item.raw_item_id 
        WHERE inventory_store_raw_items.inventory_raw_item_status = '${status}' AND inventory_store_raw_items.raw_item_id='${id}' AND raw_item.raw_status ='ACTIVE' `;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }



}

module.exports = RawItemsAccToStatusAndItemId