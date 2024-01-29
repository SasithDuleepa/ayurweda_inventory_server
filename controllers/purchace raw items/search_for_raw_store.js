const DB = require('../../config/Database');

const SearchForRawStore = (req,res) =>{
    const {invoice_id}=req.params;
    console.log(invoice_id);
    if(invoice_id){
        const sql = `SELECT * FROM purchase_raw_lot WHERE invoice_id LIKE '%${invoice_id}%' AND status = 'purchased'`; 
        DB.connection.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result);
        }
        )
    }
}

module.exports = SearchForRawStore;