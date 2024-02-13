const DB = require('../../config/Database');

const GetAllAccToName = (req,res) =>{
    const {name} = req.params;
    console.log(name)
    if(name){
        const sql =`
        SELECT _id AS identifier , non_raw_item_id AS item_id, non_raw_item_name AS item_name, 'inventory_store_non_raw' AS table_name
        FROM inventory_store_non_raw
        WHERE non_raw_item_name LIKE '%${name}%'

        UNION

        SELECT 'inventory_store_products.product_id', inventory_store_products.product_id,product.product_name, 'inventory_store_products'
        FROM product
        INNER JOIN inventory_store_products ON product.product_id = inventory_store_products.product_id
        WHERE product.product_name LIKE '%${name}%'

        UNION
        
        SELECT 'inventory_store_raw_items._id', inventory_store_raw_items.raw_item_id,raw_item.raw_item_name, 'inventory_store_raw_items'
        FROM raw_item
        INNER JOIN inventory_store_raw_items ON raw_item.raw_item_id = inventory_store_raw_items.raw_item_id
        WHERE raw_item_name LIKE '%${name}%';`

        DB.connection.query(sql, (err, result) =>{
            if(err) throw err;
            res.send(result);
        })
    }
}

module.exports = GetAllAccToName;



// SELECT '_id' AS identifier, non_raw_item_id AS item_id, non_raw_item_name AS item_name, 'inventory_store_non_raw' AS table_name
// FROM inventory_store_non_raw
// WHERE non_raw_item_name LIKE '%your_search_term%'
// UNION
// SELECT 'product_id', product_id, NULL, 'inventory_store_products'
// FROM inventory_store_products
// WHERE product_id = 'your_search_term'
// UNION
// SELECT '_id', raw_item_id, NULL, 'inventory_store_raw_items'
// FROM inventory_store_raw_items
// WHERE raw_item_id = 'your_search_term';