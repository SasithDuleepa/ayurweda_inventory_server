const DB = require('../../config/Database');

const GetAllAccToName = (req,res) =>{
    const {name} = req.params;
    console.log('inventory search for ',name)
    if(name){
        const sql =`
        SELECT inventory_store_non_raw._id AS identifier ,inventory_store_non_raw.non_raw_inventory_item_id AS Inventory_item_id, inventory_store_non_raw.non_raw_item_id AS item_id, non_raw.non_raw_name AS item_name,inventory_store_non_raw.non_raw_item_purchased_date AS purchased_date,'inventory_store_non_raw' AS table_name
        FROM non_raw
        INNER JOIN inventory_store_non_raw ON non_raw.non_raw_id = inventory_store_non_raw.non_raw_item_id
        WHERE non_raw.non_raw_name LIKE '%${name}%' AND inventory_store_non_raw.non_raw_item_status = 'RELEASED'

        UNION

        SELECT 'inventory_store_products.product_id',inventory_store_products.inventory_product_id, inventory_store_products.product_id,product.product_name,inventory_store_products.product_purchased_date, 'inventory_store_products'
        FROM product
        INNER JOIN inventory_store_products ON product.product_id = inventory_store_products.product_id
        WHERE product.product_name LIKE '%${name}%' AND inventory_store_products.inventory_product_status = 'RELEASED'

        UNION
        
        SELECT 'inventory_store_raw_items._id',inventory_store_raw_items.raw_item_inventory_id, inventory_store_raw_items.raw_item_id,raw_item.raw_item_name,inventory_store_raw_items.raw_item_purchased_date, 'inventory_store_raw_items'
        FROM raw_item
        INNER JOIN inventory_store_raw_items ON raw_item.raw_item_id = inventory_store_raw_items.raw_item_id
        WHERE raw_item_name LIKE '%${name}%' AND inventory_store_raw_items.inventory_raw_item_status = 'RELEASED';`

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
