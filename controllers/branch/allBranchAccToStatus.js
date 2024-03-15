const DB = require('./../../config/Database');

const AllBranchAccToStatus = (req,res) => {
    const{status} = req.params;
    if(status){

            DB.connection.query(`SELECT * FROM branch WHERE branch_status = '${status}'`, (err, result) => {
                if(err) throw err;
                res.send(result);
            })


    }

};

module.exports = AllBranchAccToStatus