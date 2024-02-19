const DB = require('../../config/Database');

const GetInventoryRequest = (req,res) => {
    const {id} = req.params;
    // console.log(id);
    if (id ) {
        const sql = `SELECT * FROM inventory_request WHERE invoice_id LIKE '%${id}%'`;

        DB.connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
        )
    }
}

module.exports = GetInventoryRequest;