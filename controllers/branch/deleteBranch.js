const DB = require('./../../config/Database');

const DeleteBranch = (req,res) => {
    const {id} = req.params;
   
    if(id){
        const sql = `UPDATE branch SET  branch_status=? WHERE branch_id = ?`;
        DB.connection.query(sql, [ 'INACTIVE',  id], (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )


    }
};

module.exports = DeleteBranch;