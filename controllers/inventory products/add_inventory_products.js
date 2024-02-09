
const DB = require('../../config/Database');


const AddInventoryProducts = (req,res) =>{
    const {
        product_id,
        product_batch_no,
        product_added_qty,
        product_measure_unit,
        product_store_id,
        product_location_id,
        product_released_date,
        product_released_user_id,
        inventory_product_status
    } = req.body;



        // check missing or empty
    const requiredFields = [product_id, product_batch_no, product_added_qty, product_measure_unit, product_store_id, product_location_id, product_released_date, product_released_user_id, inventory_product_status];
    const areAllFieldsFilled = requiredFields.every(field => field !== undefined && field !== '');

    if (!areAllFieldsFilled) {
        return res.status(400).send('Please fill all the fields');
    }

    const sql = `INSERT INTO inventory_store_products (product_id, product_batch_no, product_added_qty, product_actual_qty, product_shadow_qty, product_measure_unit, product_store_id, product_location_id, product_released_date, product_released_user_id, inventory_product_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [product_id, product_batch_no, product_added_qty, product_added_qty, product_added_qty, product_measure_unit, product_store_id, product_location_id, product_released_date, product_released_user_id,inventory_product_status];

    DB.connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding Product:', err);
            return res.status(500).send('An error occurred while adding the product');
        }
        console.log('Product Added Successfully');
        res.status(200).send('Product Added Successfully');
    });



}


module.exports = AddInventoryProducts;