const DB = require('../../config/Database');



const AddInventoryNonRaw = (req,res) =>{
    const {non_raw_item_id,
         non_raw_item_name, 
         non_raw_item_description, 
         non_raw_measure_unit, 
         non_raw_added_qty, 
         non_raw_actual_qty, 
         non_raw_shadow_qty, 
         non_raw_store_id, 
         non_raw_location_id, 
         non_raw_released_date, 
         non_raw_released_user_id, 
         non_raw_item_status} = req.body;

    // check missing or empty
    const requiredFields = [non_raw_item_id, non_raw_item_name, non_raw_item_description, non_raw_measure_unit, non_raw_added_qty,  non_raw_store_id, non_raw_location_id, non_raw_released_date, non_raw_released_user_id, non_raw_item_status];
    const areAllFieldsFilled = requiredFields.every(field => field !== undefined && field !== '');

    if (!areAllFieldsFilled) {
        return res.status(400).send('Please fill all the fields');
    }
    const sql = `INSERT INTO inventory_store_non_raw (non_raw_item_id, non_raw_item_name, non_raw_item_description, non_raw_measure_unit, non_raw_added_qty, non_raw_actual_qty, non_raw_shadow_qty, non_raw_store_id, non_raw_location_id, non_raw_released_date, non_raw_released_user_id, non_raw_item_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;
    const values = [non_raw_item_id, non_raw_item_name, non_raw_item_description, non_raw_measure_unit, non_raw_added_qty, non_raw_added_qty, non_raw_added_qty, non_raw_store_id, non_raw_location_id, non_raw_released_date, non_raw_released_user_id, non_raw_item_status];

    DB.connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding Non-Raw:', err);
            return res.status(500).send('An error occurred while adding Non-Raw');
        }
        console.log('Non-Raw Added Successfully');
        res.status(200).send('Non-Raw Added Successfully');
    });

}

module.exports = AddInventoryNonRaw;