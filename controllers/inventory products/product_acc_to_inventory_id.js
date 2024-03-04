

const DB = require('../../config/Database');

const ProductsAccToStatusAndInventoryId = (req,res) =>{
    const { status, id } = req.params;
    console.log(status, id);
    if(status && id){
        const sql = `SELECT inventory_store_products.* ,product.*
            FROM inventory_store_products
            INNER JOIN product ON inventory_store_products.product_id = product.product_id
            WHERE inventory_store_products.inventory_product_status = '${status}' AND inventory_store_products.inventory_product_id='${id}' AND product.product_status = 'ACTIVE'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
}

module.exports = ProductsAccToStatusAndInventoryId;