const DB = require('../../config/Database');

const AddInventory = (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req.body);
        const { purchase_order_id, po_items } = req.body;
        const promises = [];
        let invalidItems = [];

        if (po_items.length > 0) {
            po_items.forEach((element) => {
                let item_start = element.item_id.split("-")[0];

                if (item_start === "RAW" || item_start === "NRAW" || item_start === "PRODUCT") {
                    if (element.item_supplied_qty !== 0 && element.item_status !== '' && element.item_store !== '') {
                        let tableName = "";
                        let insertColumns = "";
                        let valuesPlaceholders = "";
                        let values = [];

                        switch (item_start) {
                            case "RAW":
                                tableName = "inventory_store_raw_items";
                                insertColumns = "(raw_item_inventory_id,raw_item_id, purchase_order_id, raw_item_added_qty, raw_item_actual_qty, raw_item_shadow_qty, raw_item_measure_unit, raw_item_store_id, raw_item_location_id, raw_item_released_date, raw_item_released_user_id, inventory_raw_item_status)";
                                break;
                            case "NRAW":
                                tableName = "inventory_store_non_raw";
                                insertColumns = "(non_raw_inventory_item_id,non_raw_item_id, purchase_order_id, non_raw_added_qty, non_raw_actual_qty, non_raw_shadow_qty, non_raw_measure_unit, non_raw_store_id, non_raw_location_id, non_raw_released_date, non_raw_released_user_id, non_raw_item_status)";
                                break;
                            case "PRODUCT":
                                tableName = "inventory_store_products";
                                insertColumns = "(inventory_product_id,product_id, purchase_order_id, product_added_qty, product_actual_qty, product_shadow_qty, product_measure_unit, product_store_id, product_location_id, product_released_date, product_released_user_id, inventory_product_status)";
                                break;
                            default:
                                break;
                        }

                        values = [element.item_inventory_id, element.item_id, purchase_order_id, element.item_supplied_qty, element.item_supplied_qty, element.item_supplied_qty, element.item_measure_unit, element.item_store, element.item_location, '', '', element.item_status];

                        const sql = `INSERT INTO ${tableName} ${insertColumns} VALUES (${values.map(() => '?').join(', ')})`;

                        promises.push(new Promise((resolveQuery, rejectQuery) => {
                            DB.connection.query(sql, values, (err, result) => {
                                if (err) {
                                    console.error(err);
                                    rejectQuery(err);
                                } else {
                                    console.log(result);
                                    resolveQuery(result);
                                }
                            });
                        }));
                    }
                    else {
                        invalidItems.push(element);
                    }
                }
            });
        }else{
            invalidItems.push(element);
        }


        if (invalidItems.length > 0) {
            res.status(400).send({ message: 'Invalid item data', invalidItems });
            return; 
        }else{

            Promise.all(promises)
            .then(results => {
                // console.log('All queries completed successfully');
                res.status(200).send({ message: 'Inventory added successfully' });
                resolve(results);
            })
            .catch(error => {
                console.error('Error executing queries:', error);
                res.status(500).send({ message: 'Error executing queries' });
                // reject(error);
            });

        }

        
    });
};

module.exports = AddInventory;
