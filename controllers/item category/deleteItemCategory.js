const DB = require('./../../config/Database');

const DeleteItemCategory = (req,res) => {
    const {id} = req.params;
    if(id){
        const sql = `UPDATE item_category SET item_category_status = 'INACTIVE' WHERE item_category_id='${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(result){
                res.status(200).send(result);
            }else{
                res.send(500).send(err)
            }
            
        }
        )
    }
};

module.exports = DeleteItemCategory;