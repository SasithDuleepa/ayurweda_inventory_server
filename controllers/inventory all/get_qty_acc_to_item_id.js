const DB = require('../../config/Database');


const GetQtyAccToItemId =(req,res) =>{
    const {id} = req.params;
    if(id){
        let id_catergory = id.split("-")[0]
        if(id_catergory === 'RAW'){
            const sql = `SELECT raw_item_shadow_qty FROM inventory_store_raw_items WHERE raw_item_id = '${id}' AND inventory_raw_item_status = 'RELEASED'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length > 1){
                    let total_qty = 0;
                    let count =0 ;
                    result.forEach(item =>{
                        total_qty += item.raw_item_shadow_qty;
                        count++;
                    }
                    )
                    if(count === result.length){
                        res.status(200).send(`${total_qty}`)
                        
                        console.log(total_qty);
                    }
                }
                else if(result.length === 1){
                    res.status(200).send(`${result[0].raw_item_shadow_qty}`);
                }
                

            })
        }
        else if(id_catergory === 'NRAW'){
            const sql = `SELECT non_raw_shadow_qty FROM inventory_store_non_raw WHERE non_raw_item_id = '${id}' AND non_raw_item_status = 'RELEASED'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length > 1){
                    let total_qty = 0;
                    let count =0 ;
                    result.forEach(item =>{
                        total_qty += item.non_raw_shadow_qty;
                        count++;
                    }
                    )
                    if(count === result.length){
                        res.status(200).send(`${total_qty}`)
                    }
                }
                else if(result.length === 1){
                    res.status(200).send(`${result[0].non_raw_shadow_qty}`);
                }


            })
        }
        else if(id_catergory === 'PRODUCT'){
            const sql = `SELECT product_shadow_qty FROM inventory_store_products WHERE product_id = '${id}' AND inventory_product_status = 'RELEASED'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length > 1){
                    let total_qty = 0;
                    let count =0 ;
                    result.forEach(item =>{
                        total_qty += item.product_shadow_qty;
                        count++;
                    }
                    )
                    if(count === result.length){
                        res.status(200).send(`${total_qty}`)
                    }
                }
                else if(result.length === 1){
                    res.status(200).send(`${result[0].product_shadow_qty}`);
                }


            })
        }
    }

}
module.exports = GetQtyAccToItemId;