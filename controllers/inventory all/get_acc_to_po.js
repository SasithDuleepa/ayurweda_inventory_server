const DB = require('../../config/Database');
const GetAccToPo = (req,res) => {
    const {po} = req.params;
    console.log(po)

    if(po){
        const sql =`
        SELECT inventory_store_non_raw._id AS identifier ,inventory_store_non_raw.non_raw_inventory_item_id AS Inventory_item_id, inventory_store_non_raw.non_raw_item_id AS item_id, non_raw.non_raw_name AS item_name,inventory_store_non_raw.non_raw_store_id AS store_id ,inventory_store_non_raw.non_raw_added_qty AS supplied_qty,non_raw.non_raw_measure_unit AS measure_unit,inventory_store_non_raw.non_raw_item_status AS item_status,inventory_store_non_raw.non_raw_location_id AS location, 'inventory_store_non_raw' AS table_name
        FROM non_raw
        INNER JOIN inventory_store_non_raw ON non_raw.non_raw_id = inventory_store_non_raw.non_raw_item_id
        WHERE inventory_store_non_raw.purchase_order_id= '${po}'

        UNION

        SELECT 'inventory_store_products.product_id',inventory_store_products.inventory_product_id, inventory_store_products.product_id,product.product_name,inventory_store_products.product_store_id,inventory_store_products.product_added_qty,product.product_measure_unit,inventory_store_products.inventory_product_status,inventory_store_products.product_location_id,  'inventory_store_products'
        FROM product
        INNER JOIN inventory_store_products ON product.product_id = inventory_store_products.product_id
        WHERE inventory_store_products.purchase_order_id = '${po}'

        UNION
        
        SELECT 'inventory_store_raw_items._id',inventory_store_raw_items.raw_item_inventory_id, inventory_store_raw_items.raw_item_id,raw_item.raw_item_name,inventory_store_raw_items.raw_item_store_id,inventory_store_raw_items.raw_item_added_qty,raw_item.raw_item_measure_unit,inventory_store_raw_items.inventory_raw_item_status,inventory_store_raw_items.raw_item_location_id, 'inventory_store_raw_items'
        FROM raw_item
        INNER JOIN inventory_store_raw_items ON raw_item.raw_item_id = inventory_store_raw_items.raw_item_id
        WHERE inventory_store_raw_items.purchase_order_id ='${po}';`
        DB.connection.query(sql, (err, result) =>{
            if(err) throw err;
            res.send(result);
            console.log(result)
        
        })
    }
    
};

module.exports = GetAccToPo;    