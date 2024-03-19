const DB = require('./../../config/Database');

const GetPos = (req,res) => {
    const {id} = req.params;
    console.log(id);
    const sql = `SELECT pos.*, pos_items.*, item.item_name,item.item_measure_unit,inventory.shadow_qty,customer.customer_name
    FROM pos
    JOIN pos_items ON pos_items.pos_id = pos.pos_id
    JOIN inventory ON pos_items.inventory_batch_id = inventory.inventory_batch_id
    JOIN item ON inventory.item_id = item.item_id
    JOIN customer ON pos.customer_id = customer.customer_id
    WHERE pos.pos_id = '${id}'`;

    DB.connection.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        console.log(err)
        res.status(200).send(result);
    }
    )

};

module.exports = GetPos;