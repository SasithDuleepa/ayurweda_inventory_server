const DB = require('./../../config/Database');


const SearchRequestAccToIdAndStatus = (req,res) => {
    const {id, status} = req.params;
    console.log(id, status);

    const sql = `SELECT * FROM inventory_request WHERE inventory_request_id LIKE '%${id}%' AND inventory_request_status = '${status}'`;  
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    }
    )
};

module.exports = SearchRequestAccToIdAndStatus;