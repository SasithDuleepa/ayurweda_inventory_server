
const DB = require('./../../config/Database');
const SearchPosAccToPosIdAndStatus = (req,res) =>  {
    const {posId,status } = req.params;

    const Sql = `SELECT * FROM pos WHERE pos_id LIKE "%${posId}%" AND pos_status = '${status}'`;
    DB.connection.query(Sql, (err, result) => { 
        if(err) res.status(500).send(err);
        res.status(200).send(result);
    }
    )
};

module.exports = SearchPosAccToPosIdAndStatus;