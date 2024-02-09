const DB = require('../../config/Database');

const GetAllInventoryRawItemsAccToStatus = (req,res) => {
    const {status} = req.params;
    if(status){
        const sql = `SELECT * FROM inventory_store_raw_items WHERE inventory_raw_item_status = '${status}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
};

module.exports = GetAllInventoryRawItemsAccToStatus;