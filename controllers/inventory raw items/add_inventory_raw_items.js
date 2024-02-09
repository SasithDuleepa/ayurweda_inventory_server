const DB = require('../../config/Database');

const AddInventoryRawItems = (req, res) => {
    const {
        raw_item_id,
        purchase_order_id,
        raw_item_added_qty,
        raw_item_measure_unit,
        raw_item_store_id,
        raw_item_location_id,
        raw_item_released_date,
        raw_item_released_user_id,
        inventory_raw_item_status
    } = req.body;

    // check missing or empty
    const requiredFields = [raw_item_id, purchase_order_id, raw_item_added_qty, raw_item_measure_unit, raw_item_store_id, raw_item_location_id, raw_item_released_date, raw_item_released_user_id, inventory_raw_item_status];
    const areAllFieldsFilled = requiredFields.every(field => field !== undefined && field !== '');
    
    if (!areAllFieldsFilled) {
        return res.status(400).send('Please fill all the fields');
    }

    const sql = `INSERT INTO inventory_store_raw_items (raw_item_id, purchase_order_id, raw_item_added_qty, raw_item_actual_qty, raw_item_shadow_qty, raw_item_measure_unit, raw_item_store_id, raw_item_location_id, raw_item_released_date, raw_item_released_user_id, inventory_raw_item_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [raw_item_id, purchase_order_id, raw_item_added_qty, raw_item_added_qty, raw_item_added_qty, raw_item_measure_unit, raw_item_store_id, raw_item_location_id, raw_item_released_date, raw_item_released_user_id, inventory_raw_item_status];

    DB.connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding raw item:', err);
            return res.status(500).send('An error occurred while adding the raw item');
        }
        console.log('Raw Item Added Successfully');
        res.status(200).send('Raw Item Added Successfully');
    });
};

module.exports = AddInventoryRawItems;
