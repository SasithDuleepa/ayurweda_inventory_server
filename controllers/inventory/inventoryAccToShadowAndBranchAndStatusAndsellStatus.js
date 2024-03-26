
const DB = require('./../../config/Database');

const InventoryAccToShadowAndBranchAndStatusAndSellStatus = (req,res) => {
    const {branch,status,sellStatus} = req.params;

    if(branch,status,sellStatus){

        const sql = `
        SELECT inventory.*,item.item_name
        FROM item 
        INNER JOIN inventory ON item.item_id = inventory.item_id
        INNER JOIN store ON inventory.store_id = store.store_id
        INNER JOIN branch ON branch.branch_id = store.branch_id
        WHERE  inventory.inventory_item_status = '${status}' AND shadow_qty > 0 AND branch.branch_id = '${branch}' AND selling_item = '${sellStatus}';
        
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

module.exports = InventoryAccToShadowAndBranchAndStatusAndSellStatus;