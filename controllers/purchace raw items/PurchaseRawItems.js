const DB = require('../../config/Database');

const PurchaseRawItems = (req, res) => {
    console.log(req.body);
    const { user_id, invoice_id, lot_id, supplier_id, store_id, total, date, items } = req.body;
    
    if (invoice_id !== '' && lot_id !== '' && supplier_id !== '' && store_id !== '' && total !== '' && items.length > 0) {
        const sql_1 = `INSERT INTO purchase_raw_lot (lot_id, invoice_id, supplier_id, purchased_date, store_id, total, status) VALUES (?,?,?,?,?,?,?)`;
        DB.connection.query(sql_1, [lot_id, invoice_id, supplier_id, date, store_id, total, 'purchased'], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ success: false, message: 'Internal Server Error' });
            } else if (result) {
                items.forEach((item) => {
                    const sql_2 = `INSERT INTO purchase_raw_item (
                        lot_id, item_id, unit_price, item_qty, item_unit,
                        item_purchased_date, item_purchased_user_id, item_location,
                        item_location_added_date, item_location_added_user,
                        item_lab_report_id, item_lab_report_status, item_lab_report_added_date,
                        item_lab_report_added_user, item_releasing_qty, item_releasing_description,
                        item_releasing_user_id
                    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                    DB.connection.query(sql_2, [lot_id, item.item_id, item.item_unit_price, item.item_qty, item.item_unit,
                        date, user_id, null, null, null, null, null, null, null, null, null, null],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json({ success: false, message: 'Internal Server Error' });
                            } else if (result) {
                                // You can add more logic here if needed
                            }
                        }
                    );
                });

                res.status(200).json({ success: true, message: 'Purchase successful' });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid request parameters' });
    }
};

module.exports = PurchaseRawItems;
