const DB = require('../../config/Database');

const RawAccToInvoiceId = (req,res) =>{
    const {invoice_id} = req.params;
    console.log(invoice_id)
    if(invoice_id){
        const sql = `SELECT purchase_raw_lot.*,purchase_raw_item.*
        FROM purchase_raw_lot
        INNER JOIN purchase_raw_item ON purchase_raw_lot.lot_id = purchase_raw_item.lot_id
        WHERE purchase_raw_lot.invoice_id = '${invoice_id}'`;
        DB.connection.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result);
        }
        )

    }
    
}

module.exports = RawAccToInvoiceId;