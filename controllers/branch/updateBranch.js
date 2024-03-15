const DB = require('./../../config/Database');

const UpdateBranch = (req,res) => {
    const {id} = req.params;
    const {branch_name, branch_description, branch_update_date, branch_update_user_id, branch_status, branch_address} = req.body;
    if(id){
        const sql = `UPDATE branch SET  branch_name=?, branch_description=?, branch_update_date=?, branch_update_user_id=?, branch_status=?, branch_address=? WHERE branch_id = ?`;
        DB.connection.query(sql, [branch_name, branch_description, branch_update_date, branch_update_user_id, 'ACTIVE', branch_address, id], (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )


    }
};

module.exports = UpdateBranch;