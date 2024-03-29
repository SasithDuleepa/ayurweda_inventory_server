
const DB = require('./../../config/Database');

const GetRolesAccToUserId = (req,res) => {
    const {user_id} = req.params;
    const sql = `SELECT role_id FROM user_role WHERE user_id = '${user_id}'`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // console.log(result)
            res.status(200).send(result);
        }
    }
    )
};
module.exports = GetRolesAccToUserId;