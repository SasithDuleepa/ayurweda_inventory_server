const DB = require('./../../config/Database');

const SearchCustomerAccToNameOrContactNoAndStatus = (req,res) => {
    const {nameorcontact,status} = req.params;

    const sql = `SELECT * FROM customer WHERE customer_name LIKE '%${nameorcontact}%' OR customer_contact_no LIKE '%${nameorcontact}%' AND customer_status = '${status}'`;    
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    }
    )
};

module.exports = SearchCustomerAccToNameOrContactNoAndStatus;