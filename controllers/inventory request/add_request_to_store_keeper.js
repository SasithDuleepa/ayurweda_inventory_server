const DB = require('../../config/Database');

const AddRequestToStoreKeeper = (req, res) => {
    console.log(req.body);
    const { invoice_id, date, user_id, type, job_id, status, items } = req.body;

    if (invoice_id && date && user_id && type && items.length > 0) {
        const query = `INSERT INTO inventory_request (invoice_id, inventory_request_date, inventory_request_user, inventory_request_type, job_id, inventory_request_status) VALUES ('${invoice_id}', '${date}', '${user_id}', '${type}', '${job_id}', '${status}')`;

        DB.connection.query(query, (err, result) => {
            if (err) {
                console.error("Error occurred while inserting into inventory_request:", err);
                return res.status(500).send("Internal Server Error");
            }
            console.log(result);
            if (result) {
                const query2 = `INSERT INTO inventory_request_items (invoice_id, inventory_item_id, inventory_request_items_status, inventory_request_qty) VALUES ?`;
                const itemValues = items.map(item => [invoice_id, item.item_id, 'status', item.releasing_quantity]);
                DB.connection.query(query2, [itemValues], (err, result) => {
                    if (err) {
                        console.error("Error occurred while inserting into inventory_request_items:", err);
                        return res.status(500).send("Internal Server Error");
                    }
                    console.log(result);
                    res.status(200).send("Request added successfully");
                });
            }
        });
    } else {
        res.status(400).send('Bad Request');
    }
};

module.exports = AddRequestToStoreKeeper;
