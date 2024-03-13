const DB = require('./../../config/Database');

const GetItemAccToItemId = (req,res) => {
    const {id} = req.params;
    if(id !== ''){
        DB.connection.query(`SELECT * FROM item WHERE item_id = '${id}'`, (err, result) => {
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