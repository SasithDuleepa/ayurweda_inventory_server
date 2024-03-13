const DB = require('./../../config/Database');

const SearchItemsAccToItemNameAndStatus = (req,res) => {
    const {status,name} = req.query;
    console.log('called');
    if(status && name){
        const sql = `SELECT * FROM item WHERE item_status = '${status}' AND item_name LIKE '%${name}%'`;
        DB.connection.query(sql, (err, result) => {
            if(result){
                res.status(200).send(result);
            }
            else{
                console.log(err);
                // res.status(500).send(err);
                
            
            }
        })
    }
};

module.exports = SearchItemsAccToItemNameAndStatus;