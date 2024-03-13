const DB = require('./../../config/Database');

const UpdateItem = (req,res) => {
    const {id} = req.params;
    const {_id, item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status} = req.body;

    if(id !== '' && _id !== '' && item_id !== '' && item_name !== '' && item_category_id !== '' && item_measure_unit !== '' && item_unit_selling_price !== '' && item_description !== '' && item_update_date !== '' && item_update_user_id !== '' && item_status !== ''){
        DB.connection.query('UPDATE item SET item_id = ?, item_name = ?, item_category_id = ?, item_measure_unit = ?, item_unit_selling_price = ?, item_description = ?, item_update_date = ?, item_update_user_id = ?, item_status = ? WHERE _id = ?',
        [item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status, _id],
        (err, result) => {
            if(err){
                console.log(err);
                res.status(500).send(err)
            }else{
                res.status(200).send(result);
            }
        }
            );
    }else{  
        res.status(400).send('fill all fields')
    }
}

module.exports = UpdateItem;    