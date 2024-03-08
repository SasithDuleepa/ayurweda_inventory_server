const DB = require('../../config/Database');

const GetBranchAccToStatus = (req,res) => {
    const { status } = req.params
    if(status){
        const query = `SELECT * FROM branch WHERE branch_status = '${status}'`
        DB.connection.query(query, (err, result) => {
            if(err) throw err;
            res.send(result)
        })
    
    }

};

module.exports = GetBranchAccToStatus;