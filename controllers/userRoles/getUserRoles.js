
const DB = require('./../../config/Database');

const GetUserRoles = (req,res) => {
    const sql = `SELECT * FROM role`;

    DB.connection.query(sql, (err, result) => {
        if(result){
            res.status(200).send(result);
        
        }
    })
};


module.exports = GetUserRoles;