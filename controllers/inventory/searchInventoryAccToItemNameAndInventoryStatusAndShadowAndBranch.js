const DB = require('./../../config/Database');

const SearchInventoryAccToItemNameAndInventoryStatusAndShadowAndBranch = (req,res) =>{
    const {name,status,branch} = req.params;

    if(name !== '' && status !== ""){

        const sql = `
        SELECT inventory.*,item.item_name
        FROM item 
        INNER JOIN inventory ON item.item_id = inventory.item_id
        INNER JOIN store ON inventory.store_id = store.store_id
        INNER JOIN branch ON branch.branch_id = store.branch_id
        WHERE item.item_name LIKE '%${name}%' OR inventory_batch_id LIKE '%${name}%'  AND inventory.inventory_item_status = '${status}' AND shadow_qty > 0 AND branch.branch_id = '${branch}';
        
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
}

module.exports = SearchInventoryAccToItemNameAndInventoryStatusAndShadowAndBranch;