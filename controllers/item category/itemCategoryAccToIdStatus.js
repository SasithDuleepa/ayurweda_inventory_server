const DB = require('./../../config/Database');

const ItemCategoryAccToIdAndStatus = (req,res) => {
    const {status,category} = req.params;
    if(status && category){
        const sql = `SELECT * FROM item_category WHERE item_category_status = ? AND item_category_name LIKE '%${category}%'`;
        DB.connection.query(sql,[status,category],(err,result)=>{
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

module.exports = ItemCategoryAccToIdAndStatus;