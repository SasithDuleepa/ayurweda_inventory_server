const DB = require('./../../config/Database');

const AddStore = (req,res) => {
    console.log(req.body)
    const{store_id, branch_id, store_name, store_description, store_update_date, store_update_user_id}= req.body;

    if(store_id !== '' && branch_id !== '' && store_name !== '' && store_description !== '' && store_update_date !== '' && store_update_user_id !== ''){
        DB.connection.query('INSERT INTO store (store_id, branch_id, store_name, store_description, store_update_date, store_update_user_id,store_status) VALUES (?,?,?,?,?,?,?)', [store_id, branch_id, store_name, store_description, store_update_date, store_update_user_id,'ACTIVE'], (err, result) => {
            if(result){
                res.status(200).send(result);
            }else{
                res.status(500).send(err);
            }
        })
    }else{
        res.status(400).send('fill all fields');
    
    }
};

module.exports = AddStore;