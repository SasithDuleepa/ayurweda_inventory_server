const DB = require('./../../config/Database');

const SearchUserAccToUserNameAndStatus =(req,res) => {
    const {name,status} = req.params;
    if(name && status){
        const sql = `SELECT * FROM user WHERE user_name LIKE '%${name}%' AND user_status = '${status}'`;
        DB.connection.query(sql,(err,result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
};

module.exports = SearchUserAccToUserNameAndStatus;