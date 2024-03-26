const DB = require('./../../config/Database');

const RequestAccToId = (req,res) => {
    const {id} = req.params;
    console.log(id);

    const sql = `SELECT inventory_request.*, inventory_request_items.* ,item.item_name,inventory.location,inventory.store_id,inventory.current_qty,item.item_measure_unit
    FROM inventory_request 
    INNER JOIN inventory_request_items ON inventory_request.inventory_request_id = inventory_request_items.inventory_request_id
    INNER JOIN inventory ON inventory_request_items.inventory_batch_id = inventory.inventory_batch_id
    INNER JOIN item ON item.item_id = inventory.item_id
    WHERE inventory_request.inventory_request_id = '${id}' `;  
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    }
    )
};

module.exports = RequestAccToId;