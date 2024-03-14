const DB = require('./../../config/Database');

const UpdateItem = async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status } = req.body.data;

    if (id !== '' && item_id !== '' && item_name !== '' && item_category_id !== '' && item_measure_unit !== '' && item_unit_selling_price !== '' && item_description !== '' && item_update_date !== '' && item_update_user_id !== '' && item_status !== '') {

        try {
            // set current row inactive
            const updateResult = await new Promise((resolve, reject) => {
                DB.connection.query('UPDATE item SET item_status = ? WHERE item_id = ? AND item_status="ACTIVE"', ['INACTIVE', item_id], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            console.log(updateResult);

            // create a new row with active status and new data
            const insertResult = await new Promise((resolve, reject) => {
                const sql2 = `INSERT INTO item (item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status) VALUES 
                ('${item_id}','${item_name}', '${item_category_id}', '${item_measure_unit}', '${item_unit_selling_price}', '${item_description}', '${item_update_date}', '${item_update_user_id}', 'ACTIVE')`;

                DB.connection.query(sql2, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            console.log(insertResult);

            res.status(200).send('Item updated successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

    } else {
        res.status(400).send('Fill all fields');
    }
};

module.exports = UpdateItem;
