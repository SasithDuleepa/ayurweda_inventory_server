const DB = require('../../config/Database');

const RawItemsAccToStatusAndInventoryId = (req,res) => {
    const { status, id } = req.params;
    console.log(status, id);
    if(status && id ){
        const sql = `SELECT inventory_store_raw_items.*,raw_item.*
        FROM inventory_store_raw_items
        INNER JOIN raw_item ON inventory_store_raw_items.raw_item_id = raw_item.raw_item_id 
        WHERE inventory_store_raw_items.inventory_raw_item_status = '${status}' AND inventory_store_raw_items.raw_item_inventory_id='${id}'  `;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
            console.log(result)
        }
        )
    }



}

module.exports = RawItemsAccToStatusAndInventoryId ;