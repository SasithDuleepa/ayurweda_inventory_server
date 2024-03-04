
const DB = require('../../config/Database');
const NonRawAccToStatusAndInventoryId = (req,res) =>{
    const { status, id } = req.params;
    if(status && id){
        const sql = `
        SELECT inventory_store_non_raw.*,
        non_raw.non_raw_name AS non_raw_item_name,
        non_raw.non_raw_unit_price AS non_raw_item_unit_price


        FROM inventory_store_non_raw
        INNER JOIN non_raw ON non_raw.non_raw_id = inventory_store_non_raw.non_raw_item_id
        WHERE inventory_store_non_raw.non_raw_item_status = '${status}' AND inventory_store_non_raw.non_raw_inventory_item_id='${id}'`;

        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
}

module.exports = NonRawAccToStatusAndInventoryId;