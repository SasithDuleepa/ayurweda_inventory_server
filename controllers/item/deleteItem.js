const DB = require('./../../config/Database');

const DeleteItem = (req,res) => {
    const { id } = req.params;
    if(id){
        DB.connection.query('UPDATE item SET item_status = ? WHERE item_id = ? AND item_status="ACTIVE"', ['INACTIVE', id], (err, result) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(result)
            }
        });
    }
}

module.exports = DeleteItem