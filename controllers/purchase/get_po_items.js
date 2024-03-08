const DB = require('../../config/Database');

const PoItems = (req,res) => {
    const {id} = req.params;
    console.log(id)
    if (id){
        const sql = `SELECT 
        purchase_order_items.*, 
        purchase_order.*,
        supplier.supplier_name,

        COALESCE(raw_item.raw_item_name, non_raw.non_raw_name, product.product_name) AS item_name,
        COALESCE(raw_item.raw_item_measure_unit, non_raw.non_raw_measure_unit, product.product_measure_unit) AS item_measure_unit,
        COALESCE(raw_item.raw_item_unit_price, non_raw.non_raw_unit_price, product.product_price) AS item_selling_price
        
        
    FROM 
        purchase_order
    JOIN 
        supplier ON supplier.supplier_id = purchase_order.supplier_id
    JOIN 
        purchase_order_items ON purchase_order_items.purchase_order_id = purchase_order.purchase_order_id
    LEFT JOIN 
        raw_item ON raw_item.raw_item_id = purchase_order_items.purchase_order_item_id 
    LEFT JOIN 
        non_raw ON non_raw.non_raw_id = purchase_order_items.purchase_order_item_id
    LEFT JOIN 
        product ON product.product_id = purchase_order_items.purchase_order_item_id
    WHERE 
        purchase_order.purchase_order_id = '${id}'

        ;`;
        DB.connection.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
};

module.exports = PoItems;