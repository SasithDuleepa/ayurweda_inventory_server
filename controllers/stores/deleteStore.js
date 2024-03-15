const DB = require('./../../config/Database');

const DeleteStore = (req,res) =>{
    const {id} = req.params;
    console.log(id);
        if(id){
        const sql = `UPDATE store SET  store_status=? WHERE store_id=?`;
        DB.connection.query(sql, [ 'INACTIVE', id], (err, result) => {   
            if(result){
                res.status(200).send(result);
            }else{
                res.status(500).send(err);
            }
        }
        )
    }
}

module.exports = DeleteStore;