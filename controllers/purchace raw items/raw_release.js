const DB = require('../../config/Database');

const RawRelease =async (req,res) =>{
    const { invoice_Item_Data ,invoice_id} = req.body;
    console.log(invoice_Item_Data, );

    if (invoice_Item_Data.length > 0) {
        for (const data of invoice_Item_Data) {
            const sql = `UPDATE purchase_raw_item
                SET item_releasing_qty = ?, item_releasing_description = ?,item_releasing_user_id = ?, item_releasing_date = ?
                WHERE lot_id = ? AND item_id = ? AND item_qty = ? AND item_unit = ? AND item_purchased_date = ?`;

            await DB.connection.query(sql, [
                data.item_releasing_qty,
                data.item_releasing_description,
                data.item_releasing_user_id,
                data.item_releasing_date,
                data.lot_id,
                data.item_id,
                data.item_qty,
                data.item_unit,
                data.item_purchased_date
            ]);
        }



        //update status
        const sql_2 = `UPDATE purchase_raw_lot SET status = 'done' WHERE invoice_id = '${invoice_id}'`;
        await DB.connection.query(sql_2);
    }

    res.status(200).json({
        message: 'Raw Data Updated Successfully'
    });
};

module.exports = RawRelease;