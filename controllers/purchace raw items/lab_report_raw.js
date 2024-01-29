const DB = require('../../config/Database');

const LabReportUpdate = async (req, res) => {
    try {
        const { invoice_Item_Data,invoice_id } = req.body;
        console.log(invoice_Item_Data);

        if (invoice_Item_Data && invoice_Item_Data.length > 0) {
            for (const data of invoice_Item_Data) {
                const sql = `UPDATE purchase_raw_item
                    SET item_lab_report_id = ?, item_lab_report_status = ?, item_lab_report_added_date = ?, item_lab_report_added_user = ?
                    WHERE lot_id = ? AND item_id = ? AND item_qty = ? AND item_unit = ? AND item_purchased_date = ?`;

                await DB.connection.query(sql, [
                    data.item_lab_report_id,
                    data.item_lab_report_status,
                    data.item_lab_report_added_date,
                    data.item_lab_report_added_user,
                    data.lot_id,
                    data.item_id,
                    data.item_qty,
                    data.item_unit,
                    data.item_purchased_date
                ]);
            }

            //update status
            const sql = `UPDATE purchase_raw_lot SET status ='lab' WHERE invoice_id='${invoice_id}'`;
            await DB.connection.query(sql);

            res.status(200).json({
                success: true,
                message: 'Lab Report Data Updated Successfully'
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Invalid request body'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: 'Failed to update lab report data'
        });
    }
};

module.exports = LabReportUpdate;
