
const DB = require('../../config/Database');
const NonRawAccToStatusAndInventoryId = (req,res) =>{
    const { status, id } = req.params;
    if(status && id){
        const sql = `SELECT * FROM inventory_store_non_raw WHERE non_raw_item_status = '${status}' AND non_raw_inventory_item_id='${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
}

module.exports = NonRawAccToStatusAndInventoryId;