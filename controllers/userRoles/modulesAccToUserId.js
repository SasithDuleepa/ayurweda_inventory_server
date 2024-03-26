const DB = require('./../../config/Database');
const ModulesAccToUserId = (req,res) => {
    const {id} = req.params;


    const sql = `SELECT role.* 
    FROM user_role
    JOIN role ON user_role.role_id = role.role_id
    WHERE user_role.user_id = '${id}'`;
    DB.connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    }
    )


};

module.exports = ModulesAccToUserId;