const DB = require('./../../config/Database');

const AddRolesToUser = async (req, res) => {
    console.log(req.body);
    const { user, roles } = req.body;
    if (user !== '' && roles.length > 0) {
        try {
            // Search if user availability
            const sql_1 = `SELECT * FROM user_role WHERE user_id = '${user}'`;
            const result = await new Promise((resolve, reject) => {
                DB.connection.query(sql_1, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });

            if (result.length > 0) {
                //delete all roles first
                const sql_3 = `DELETE FROM user_role WHERE user_id = '${user}'`;
                const Delete = await new Promise((resolve, reject) => {
                    DB.connection.query(sql_3, (err, deleteResult) => {
                        if (err) reject(err);
                        else resolve(deleteResult);
                    });
                }
                )
                if(Delete){
                    for (const element of roles) {
                        const sql_2 = `INSERT INTO user_role (user_id, role_id) VALUES ('${user}', '${element.role_id}')`;
                        await new Promise((resolve, reject) => {
                            DB.connection.query(sql_2, (err, insertResult) => {
                                if (err) reject(err);
                                else resolve(insertResult);
                            });
                        });
                    }
                    res.status(200).json({ message: "User roles updated successfully" });

                }
                
            } else if (result.length === 0) {
                for (const element of roles) {
                    const sql_2 = `INSERT INTO user_role (user_id, role_id) VALUES ('${user}', '${element.role_id}')`;
                    await new Promise((resolve, reject) => {
                        DB.connection.query(sql_2, (err, insertResult) => {
                            if (err) reject(err);
                            else resolve(insertResult);
                        });
                    });
                }
                res.status(200).json({ message: "User roles added successfully" });
            }
        } catch (error) {
            console.error("Error occurred:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(400).json({ error: "Bad request" });
    }
};

module.exports = AddRolesToUser;
