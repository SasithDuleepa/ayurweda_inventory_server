const DB = require('./../../config/Database');

const StoreAccToStoreId = (req,res) => {
    const {id} = req.params;
    if(id){
        const sql = `SELECT store.* , branch.branch_name
        FROM store
        INNER  JOIN branch ON store.branch_id = branch.branch_id
         WHERE store_id = '${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
};

module.exports = StoreAccToStoreId;