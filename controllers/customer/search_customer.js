const DB = require('../../config/Database');

const SearchCustomer = (req,res) => {
    const {name} = req.params;
    console.log(name);
    if (name){
        const sql = `SELECT * FROM customer WHERE customer_name LIKE '%${name}%'`;
        DB.connection.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
};

module.exports = SearchCustomer;