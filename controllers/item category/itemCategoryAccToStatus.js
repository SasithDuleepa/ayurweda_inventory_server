const DB = require('./../../config/Database');

const ItemCategoryAccToStatus = (req,res) => {
    const {status} = req.params;
    if(status ){
        const sql = `SELECT * FROM item_category WHERE item_category_status = ? `;
        DB.connection.query(sql,[status],(err,result)=>{
            if(result){
                res.status(200).send(result)
            }else{
                console.log(err)
                res.status(500).send(err)
            }
            
        }
        )
    }else{
        
    }
};

module.exports = ItemCategoryAccToStatus;