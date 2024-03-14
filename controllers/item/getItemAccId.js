const DB = require('./../../config/Database');

const GetItemAccToItemId = (req,res) => {
    const {id} = req.params;
    console.log(id);
    if(id !== ''){
        const sql = `SELECT item.*,item_category.item_category_name 
        FROM item
        INNER JOIN item_category ON item.item_category_id = item_category.item_category_id
        WHERE item.item_id = '${id}' AND item.item_status= 'ACTIVE'`;
        DB.connection.query(sql, (err, result) => {
            if(result){
                res.status(200).send(result);
            }
            else{
                res.status(500).send(err);
            
            }
        })
    }else{
        res.status(400).send('please add a valid item id')
    }
};

module.exports = GetItemAccToItemId;