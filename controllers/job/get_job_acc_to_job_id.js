const DB = require('../../config/Database');

const GetJobAccToId = (req,res ) => {
    const {id} = req.params;
    console.log(id);
    if(id){

        const sql = `SELECT job_items.*,job.*
        FROM job
        INNER JOIN job_items ON job.job_id = job_items.job_id
        WHERE job.job_id = '${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.status(200).send(result);
        })
    }
};

module.exports = GetJobAccToId;