const DB = require('../../config/Database');

const SearchRawItem = (req, res ) => {
    const {name}  = req.params;
    if(name !==''){
        const query = `SELECT * FROM raw_item WHERE raw_item_name LIKE '%${name}%'`;
        DB.connection.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        }
        )
    }
}

module.exports = SearchRawItem;