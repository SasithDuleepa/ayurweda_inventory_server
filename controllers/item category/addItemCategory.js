const DB = require('./../../config/Database');

const AddItemCategory = (req,res) => {
    console.log(req.body)
    const {item_category_id, item_category_name, item_category_update_date, item_category_update_user_id, item_category_description, item_category_status} = req.body;

    


    if( item_category_id !== '' && item_category_name !== '' && item_category_update_date !== '' && item_category_update_user_id !== '' && item_category_description !== '' && item_category_status !== '' ){

        const search_sql = `SELECT * FROM item_category WHERE item_category_name = '${item_category_name}'`;
        DB.connection.query(search_sql, (err, result) => {
            if(err){
                console.log(err);
                res.status(500).send(err)

            }else{
                if(result.length > 0){
                    res.status(409).send('item category already exists')
                }else{
                    const sql = `INSERT INTO item_category (item_category_id, item_category_name, item_category_update_date, item_category_update_user_id, item_category_description, item_category_status) VALUES ('${item_category_id}', '${item_category_name}', '${item_category_update_date}', '${item_category_update_user_id}', '${item_category_description}', '${item_category_status}')`;
                    DB.connection.query(sql, (err, result) => {
                        if(err){
                            console.log(err);
                            res.status(500).send(err)
            
                        }else{
                            res.status(200).send(result)
                        }
                    });

                }
            }
        }
        )
    }else{
        res.status(400).send('fill all fields')
    }
};

module.exports = AddItemCategory;