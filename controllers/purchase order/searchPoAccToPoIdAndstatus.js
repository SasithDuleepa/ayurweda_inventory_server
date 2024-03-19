const DB = require('./../../config/Database');

const SearchPoAccToPoIdAndStatus = (req,res) => {
    const {id,status} = req.params;
    console.log(id,status)

    const sql= `SELECT purchase_order.* ,supplier.supplier_name
    FROM purchase_order 
    JOIN supplier ON purchase_order.supplier_id = supplier.supplier_id
    WHERE purchase_order.po_id LIKE '%${id}%' AND purchase_order.po_status = '${status}'`;
    DB.connection.query(sql,(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })


};


module.exports = SearchPoAccToPoIdAndStatus;