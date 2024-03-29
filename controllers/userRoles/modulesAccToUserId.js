const DB = require('./../../config/Database');
const ModulesAccToUserId = (req,res) => {
    const {id} = req.params;
    let Roles = []
    const sql = `SELECT role_id FROM user_role WHERE user_id = '${id}'`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            
           
            result.forEach(element => {
                Roles.push(element.role_id)
            }
            )

            console.log(Roles)
            res.status(200).send(Roles);
        }
    }
    )

};

module.exports = ModulesAccToUserId;