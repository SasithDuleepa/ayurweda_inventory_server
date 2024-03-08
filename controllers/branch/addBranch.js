
const DB = require('../../config/Database');


const AddBranch = (req,res) => {
    console.log(req.body)
    const {branch_id,branch_name,branch_address,branch_status} = req.body;

    if(branch_id !== '' && branch_name !== '' && branch_address !== '' && branch_status !== ''){
        
        const sql = "INSERT INTO `branch` (`branch_id`, `branch_name`, `branch_address`, `branch_status`) VALUES (?,?,?,?)";

        DB.connection.query(sql, [branch_id,branch_name,branch_address,branch_status], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
            res.end();
        
        })

    }else{
        res.status(400).send('fill all fields')
    }
};

module.exports = AddBranch;


