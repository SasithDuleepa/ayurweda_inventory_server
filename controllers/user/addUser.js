const DB = require('./../../config/Database');

const AddUser = (req,res) => {
    const {user_id, user_name, user_password,branch_id} = req.body;
    if(user_id !=='' && user_name !=='' && user_password !==''){
        DB.connection.query(`INSERT INTO user (user_id, user_name, user_password,user_status,branch_id) VALUES ('${user_id}', '${user_name}', '${user_password}','ACTIVE','${branch_id}')`, (err, result) => {
            if(result){
                res.status(200).send(result)
            }else{
                res.status(500).send(err)
            }
        })
    }else{
        res.status(400).send('Please fill all the fields')
    
    }
};

module.exports = AddUser;