const DB = require('./../../config/Database');

const AddBranch = (req,res) => {
    console.log(req.body)
    const { branch_id, branch_name, branch_description, branch_update_date, branch_update_user_id,  branch_address} = req.body;
    if(branch_id !== "" && branch_name !== "" && branch_description !== '' && branch_update_date !== "" && branch_update_user_id !== "" && branch_address !== ""){
        DB.connection.query('INSERT INTO branch (branch_id, branch_name, branch_description, branch_update_date, branch_update_user_id, branch_status, branch_address) VALUES (?,?,?,?,?,?,?)', [branch_id, branch_name, branch_description, branch_update_date, branch_update_user_id, 'ACTIVE', branch_address], (err, result) => {
            if(err){
                console.log(err);
                
            }else{
                res.send(result);
            }
        });
    }

};

module.exports = AddBranch;