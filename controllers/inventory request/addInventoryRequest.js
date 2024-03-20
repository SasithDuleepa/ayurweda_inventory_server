const DB = require('./../../config/Database');

const AddInventoryRequest = (req,res) => {
    console.log(req.body)
    const {inventory_request_type,inventory_request_id,inventory_request_user_id,inventory_request_date,inventory_request_status,inventory_request_items,inventory_request_description} = req.body;

    if(inventory_request_id !== '' && inventory_request_user_id !== '' && inventory_request_date !== ''  && inventory_request_items.length >0){
        if(inventory_request_type ===  'ITEM'){
            //reduce item from inventory
            //add items
            inventory_request_items.map(item => {
               const Sql1 = `SELECT shadow_qty FROM inventory`;
               DB.connection.query(Sql1, [item.item_inventory_batch_id], (err, result) => {
                if(result){

                    //reduce
                    const Sql = `UPDATE inventory SET shadow_qty = ? WHERE inventory_batch_id = ?`; 
                    DB.connection.query(Sql, [result[0].shadow_qty - item.qty, item.item_inventory_batch_id], (err, result) => {})
                }
                else{
                    console.log(err)
                }
               })
            })




            //add items
            inventory_request_items.map(item => {
                const Sql = `INSERT INTO inventory_request_items (inventory_request_id, inventory_batch_id, inventory_request_item_qty) VALUES (?, ?, ?)`;
                DB.connection.query(Sql, [inventory_request_id, item.item_inventory_batch_id, item.qty], (err, result) => {
                    if(result){
                       console.log(result)
                        
                    }
                    else{
                        console.log(err)
                    }
                })
            })


        }else{
            const Sql = `INSERT INTO inventory_request (inventory_request_id,inventory_request_user_id,inventory_request_date,inventory_request_status,inventory_request_description) VALUES (?,?,?,?,?)`;
        DB.connection.query(Sql, [inventory_request_id, inventory_request_user_id, inventory_request_date, inventory_request_status,inventory_request_description], (err, result) => {
            if(result){

                //add items
                inventory_request_items.map(item => {
                    const Sql = `INSERT INTO inventory_request_items (inventory_request_id, inventory_batch_id, inventory_request_item_qty) VALUES (?, ?, ?)`;
                    DB.connection.query(Sql, [inventory_request_id, item.item_inventory_batch_id, item.qty], (err, result) => {
                        if(result){
                            res.status(200).json({message: "Inventory Request Added Successfully"})
                        }
                        else{
                            console.log(err)
                        }
                    })
                })

            }
            else{
                console.log(err)
            }
        })

        }

        
    }
};

module.exports = AddInventoryRequest;


