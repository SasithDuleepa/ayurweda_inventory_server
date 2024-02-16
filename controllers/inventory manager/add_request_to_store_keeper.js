const DB = require('../../config/Database');

const AddRequestToStoreKeeper = (req, res) => {
    console.log(req.body);
    const { invoice_id, date, user_id, type, job_id, status, items } = req.body;

    if (invoice_id && date && user_id && type && job_id && status && items) {
        const query = `INSERT INTO inventory_request (invoice_id, inventory_request_date, inventory_request_user, inventory_request_type, job_id, inventory_request_status) VALUES ('${invoice_id}', '${date}', '${user_id}', '${type}', '${job_id}', '${status}')`;

        DB.connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            if (result) {
                const query2 = `INSERT INTO inventory_request_items (invoice_id, inventory_item_id, inventory_request_items_status,inventory_request_qty) VALUES ?`;
                const itemValues = items.map(item => [invoice_id, item.item_id, 'status', item.releasing_quantity]);
                DB.connection.query(query2, [itemValues], (err, result) => {
                    if (err) throw err;
                    console.log(result);
                });
            }
        });
    }
};

module.exports = AddRequestToStoreKeeper;
