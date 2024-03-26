const DB = require('./../../config/Database');

const AddInventoryRelease = async (req, res) => {
    console.log(req.body);
    const { release_invoice_id, request_invoice_id, release_user, release_date, release_items } = req.body;

    if (release_invoice_id !== '' && request_invoice_id !== '' && release_user !== "" && release_date !== "" && release_items.length > 0) {
        try {
            // Start a transaction
            DB.connection.beginTransaction();

            // release
            const release_query = `INSERT INTO inventory_release (inventory_release_id, inventory_request_id, inventory_release_date, inventory_release_user_id) VALUES ('${release_invoice_id}','${request_invoice_id}','${release_date}','${release_user}')`;
            DB.connection.query(release_query);

            // add release items
            for (const item of release_items) {
                const release_item_query = `INSERT INTO inventory_release_items (inventory_release_id, inventory_item_batch_id, inventory_release_qty, inventory_release_item_description) VALUES ('${release_invoice_id}', '${item.inventory_item_id}', '${item.item_requested_qty}', '${item.item_description}')`;
                DB.connection.query(release_item_query);
            }

            // update request
            const update_request_query = `UPDATE inventory_request SET inventory_request_status = 'RELEASED' WHERE inventory_request_id = '${request_invoice_id}'`;
            DB.connection.query(update_request_query);

            // reduce from inventory
            for (const item of release_items) {
                const reduce_item_query = `UPDATE inventory SET current_qty = current_qty - ${item.item_requested_qty} WHERE inventory_batch_id = '${item.inventory_item_id}'`;
                DB.connection.query(reduce_item_query);
            }

            // Commit the transaction
            DB.connection.commit();

            res.status(200).send("Inventory release added successfully");
        } catch (error) {
            console.error("Error:", error);
            // Rollback the transaction if any query fails
            DB.connection.rollback();
            res.status(500).send("An error occurred");
        } 
    } else {
        res.status(400).send("Invalid input data");
    }
};

module.exports = AddInventoryRelease;
