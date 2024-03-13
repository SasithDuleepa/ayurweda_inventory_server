const DB = require('./../../config/Database');

const UpdateItemCategory = (req,res) => {
    const {id} = req.query;
    console.log(req.body)
    const {item_category_description,item_category_id,item_category_name,item_category_status,item_category_update_date,item_category_update_user_id} = req.body;

    if( id !== '' && item_category_description !== '' && item_category_id !== '' && item_category_name !== '' && item_category_status !== '' && item_category_update_date !== '' && item_category_update_user_id !== ''){
        DB.connection.query(`UPDATE item_category SET item_category_description = '${item_category_description}', item_category_id = '${item_category_id}', item_category_name = '${item_category_name}', item_category_status = '${item_category_status}', item_category_update_date = '${item_category_update_date}', item_category_update_user_id = '${item_category_update_user_id}' WHERE item_category_id = '${id}';`, (err, result) => {
            if(result){
                res.status(200).send(result)
            }else{
                res.status(500).send(err)
            }
        });
    }else(
        res.status(400).send('bad request')
    )
};

module.exports = UpdateItemCategory;