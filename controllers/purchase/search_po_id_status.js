const DB = require('../../config/Database');

const SearchPoIdStatus = (req,res) => {
    const {id,status} = req.params;
    console.log(id)
    if (id && status){
        const sql = `SELECT * FROM purchase_order WHERE purchase_order_id LIKE '%${id}%' AND purchase_order_status = '${status}'`;
        DB.connection.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
};

module.exports = SearchPoIdStatus;