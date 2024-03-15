const DB = require('./../../config/Database');


const BranchAccToBranchId = (req,res) => {
    const{id} = req.params;
    if(id){

            DB.connection.query(`SELECT * FROM branch WHERE branch_id = '${id}'`, (err, result) => {
                if(err) throw err;
                res.send(result);
            })


    }
};

module.exports = BranchAccToBranchId;