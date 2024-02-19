const DB = require('../../config/Database');

const GetInventoryRequestItems = (req,res) => {
    const {id} = req.params;
    console.log(id);

    if(id){
        const sql = `SELECT inventory_request.*,
        inventory_request_items.*
        FROM inventory_request
        INNER JOIN inventory_request_items
        ON inventory_request.invoice_id = inventory_request_items.invoice_id
        
        WHERE inventory_request.invoice_id = '${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
        
    }
};

module.exports = GetInventoryRequestItems;