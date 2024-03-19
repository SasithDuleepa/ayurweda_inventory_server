const DB = require('./../../config/Database');

const SearchBillAccToRateRangedAndBranchAndPosType = (req,res) => {
    const {from,to,branch,posType} = req.params;
    console.log(from,to,branch,posType);
    const Sql = `SELECT pos.*, customer.customer_name
    FROM pos 
    INNER JOIN customer ON pos.customer_id = customer.customer_id
    WHERE pos.pos_date BETWEEN '${from}' AND '${to}' AND pos.pos_type = '${posType}' AND pos.branch_id = '${branch}'`;

    DB.connection.query(Sql, (err, result) => { 
        if(err) console.log(err);
        res.status(200).send(result);
    }
    )
};

module.exports = SearchBillAccToRateRangedAndBranchAndPosType;