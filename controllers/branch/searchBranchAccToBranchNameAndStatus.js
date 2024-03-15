const DB = require('./../../config/Database');

const SearchBranchAccToBranchNameAndStatus = (req,res) => {
    const {name,status} = req.params;
    if(name && status){
        DB.connection.query(`SELECT * FROM branch WHERE branch_name LIKE '%${name}%' AND branch_status = '${status}'`, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    }
};

module.exports = SearchBranchAccToBranchNameAndStatus;