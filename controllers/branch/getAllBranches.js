const DB = require('../../config/Database');

const GetAllBranches = (req,res) => {
    const sql = `SELECT * FROM branches`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    }
    )

    
}
module.exports = GetAllBranches