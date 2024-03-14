const DB = require('./../../config/Database');

const SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty =(req,res) => {
    const {name,status} = req.params;

    if(name !== '' && status !== ""){

        const sql = `
        SELECT inventory.*,item.item_name
        FROM item 
        INNER JOIN inventory ON item.item_id = inventory.item_id        
        WHERE item.item_name LIKE '%${name}%' AND inventory.inventory_item_status = '${status}' AND shadow_qty > 0;
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

module.exports = SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty;