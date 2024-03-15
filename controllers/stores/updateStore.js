const DB = require('./../../config/Database');

const UpdateStore = (req,res) => {
    const {id} = req.params;
    console.log(req.body);
    console.log(id);
    const { branch_id, store_name, store_description, store_update_date, store_update_user_id} = req.body;
    if(id){
        const sql = `UPDATE store SET  branch_id =?, store_name=?, store_description=?, store_update_date=?, store_update_user_id=? WHERE store_id=?`;
        DB.connection.query(sql, [ branch_id, store_name, store_description, store_update_date, store_update_user_id, id], (err, result) => {   
            if(result){
                res.status(200).send(result);
            }else{
                res.status(500).send(err);
            }
        }
        )
    }
};

module.exports = UpdateStore;