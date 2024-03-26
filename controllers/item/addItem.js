const DB = require('./../../config/Database');


const AddItem = (req,res) => {
    console.log(req.body)
    const{ item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status} = req.body;
    if(item_id !== '' && item_name !== '' && item_category_id !== '' && item_measure_unit !== '' && item_unit_selling_price !== ''  && item_update_date !== '' && item_update_user_id !== '' && item_status !== ''){
        DB.connection.query('INSERT INTO item (item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status) VALUES (?,?,?,?,?,?,?,?,?)',
         [item_id, item_name, item_category_id, item_measure_unit, item_unit_selling_price, item_description, item_update_date, item_update_user_id, item_status],
          (err, result) => {
            if(err){
                console.log(err);
                res.status(500).send(err)
            }else{
                res.status(200).send(result);
            }
        })
    }else{
        res.status(400).send('fill all fields')
    }
};

module.exports = AddItem;