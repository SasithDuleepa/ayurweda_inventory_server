const DB = require('../../config/Database')

const SearchStoreAccToStoreNameAndStatus = (req,res) => {
    const {name} = req.params;  
    if(name){
        const sql = `SELECT * FROM store WHERE store_name LIKE '%${name}%' AND  store_status='ACTIVE'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
};

module.exports = SearchStoreAccToStoreNameAndStatus;