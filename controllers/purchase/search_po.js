const DB = require('../../config/Database');

const SearchPo = (req,res) => {
    const {id} = req.params;
    console.log(id)
    if (id){
        const sql = `SELECT * FROM purchase_order WHERE purchase_order_id LIKE '%${id}%'`;
        DB.connection.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
};


module.exports = SearchPo;