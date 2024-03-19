const DB = require('./../../config/Database');

const SearchBillAccToBillIdAndBranchAndPosType = (req,res) => {
    const {billId,branch,posType} = req.params;
    const Sql = `SELECT pos.*, customer.customer_name
    FROM pos 
    INNER JOIN customer ON pos.customer_id = customer.customer_id
    WHERE pos.pos_id LIKE "%${billId}%" AND pos.pos_type = '${posType}' AND pos.branch_id = '${branch}'`;
    DB.connection.query(Sql, (err, result) => { 
        if(err) res.status(500).send(err);
        res.status(200).send(result);
    }
    )

};

module.exports = SearchBillAccToBillIdAndBranchAndPosType;