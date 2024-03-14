const DB = require('./../../config/Database');

const InventoryAccToInventoryBatchId = (req,res) => {
    const {id} = req.params;
    if(id ){
        const sql = `
        SELECT inventory.*,item.*
        FROM item 
        INNER JOIN inventory ON item.item_id = inventory.item_id        
        WHERE inventory.inventory_batch_id = '${id}';
        `
        DB.connection.query(sql,(err,result) => {
            if(result){
                console.log(result);
                
                res.send(result);
            }else{
                console.log(err);
            }
        }
        )
    }
};

module.exports = InventoryAccToInventoryBatchId;