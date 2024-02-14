const DB = require('../../config/Database');


const GetUnitPriceAccToItemId = (req,res) =>{
    const {id} = req.params;
    console.log(id);
    if(id){
        let id_catergory = id.split("-") 
        if(id_catergory[0]  == 'RAW'){
            const sql = `SELECT raw_item_unit_price FROM raw_item WHERE raw_item_id = '${id}' AND raw_status = 'ACTIVE'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length === 1){
                    res.status(200).send(`${result[0].raw_item_unit_price}`)
                    console.log(result)
                }else{
                    res.status(500)
                }
            })

        }
        else if(id_catergory[0] == 'NRAW'){
            const sql = `SELECT non_raw_item_unit_price FROM inventory_store_non_raw WHERE non_raw_item_id = '${id}' AND non_raw_item_status = 'RELEASED'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length === 1){
                    res.status(200).send(`${result[0].non_raw_item_unit_price}`)
                    console.log(result)
                }else{
                    res.status(500)
                }
            })
        }
        else if(id_catergory[1] == 'PRODUCT'){
            const sql = `SELECT product_unit_price FROM inventory_store_product WHERE inventory_product_id = '${id}' AND non_raw_item_status = 'RELEASED'`;
            DB.connection.query(sql, (err, result) =>{
                if(err) throw err;
                if(result.length === 1){
                    res.status(200).send(`${result[0].product_unit_price}`)
                    console.log(result)
                }else{
                    res.status(500)
                }
            })
        }
    }
};

module.exports = GetUnitPriceAccToItemId;