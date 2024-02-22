const DB = require('../../config/Database');

const GetCustomer = (req,res) => {
    const {id} = req.params;
    if(id){
        const sql= `SELECT * FROM customer WHERE customer_id = '${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        })

    }
};

module.exports = GetCustomer;