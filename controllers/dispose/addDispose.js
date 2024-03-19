const DB = require('./../../config/Database');

const AddDispose = async (req, res) => {
    console.log(req.body);
    const { dispose_id, user_id, date, branch_id, items } = req.body;

    if (dispose_id !== '' && user_id !== "" && date !== "" && branch_id !== "" && items.length > 0) {
        try {
            // Reduce inventory
            for (const item of items) {
                const sql1 = `UPDATE inventory SET current_qty = current_qty - ?, shadow_qty = shadow_qty - ? WHERE inventory_batch_id = ?`;
                await new Promise((resolve, reject) => {
                    DB.connection.query(sql1, [item.item_qty, item.item_qty, item.item_id], (err, result) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            console.log(result);
                            resolve();
                        }
                    });
                });
            }

            // Add dispose
            const sql2 = `INSERT INTO dispose (dispose_id, dispose_date, branch_id, dispose_user_id) VALUES(?, ?, ?, ?);`;
            const disposeResult = await new Promise((resolve, reject) => {
                DB.connection.query(sql2, [dispose_id, date, branch_id, user_id], (err, result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            });

            // Add dispose items
            for (const item of items) {
                const sql3 = `INSERT INTO dispose_items (dispose_id, inventory_batch_id, dispose_qty, dispose_item_description) VALUES(?, ?, ?, ?);`;
                await new Promise((resolve, reject) => {
                    DB.connection.query(sql3, [dispose_id, item.item_id, item.item_qty, item.item_description], (err, result) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            console.log(result);
                            resolve();
                        }
                    });
                });
            }

            // Send success response after all operations are done
            res.status(200).json({ message: "Dispose added successfully." });

        } catch (error) {
            // Send error response if any operation fails
            console.error(error);
            res.status(500).json({ error: "An error occurred while adding dispose." });
        }
    } else {
        res.status(400).json({ error: "Missing or invalid parameters." });
    }
};

module.exports = AddDispose;
