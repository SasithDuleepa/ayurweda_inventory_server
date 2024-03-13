
const DB = require('./../../config/Database');

const ItemCategoryAccToItemCategoryId = (req,res) => {
    const {id} = req.query;
    if(id){
        const sql = `SELECT * FROM item_category WHERE item_category_id = '${id}'`;
        DB.connection.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    }
    }


module.exports = ItemCategoryAccToItemCategoryId;