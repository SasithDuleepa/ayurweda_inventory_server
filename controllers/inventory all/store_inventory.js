const DB = require('../../config/Database');

const StoreInventory = (req,res) => {
    console.log(req.body)
    return new Promise((resolve, reject) => {
        const { po_id, po_items,updated_date } = req.body;
        const promises = [];
        let invalidItems = [];

        if(po_items.length>0 && po_id !== ''){
            po_items.map((items) => {
                let item_start = items.item_id.split("-")[0];
                if (item_start === "RAW" || item_start === "NRAW" || item_start === "PRODUCT") {
                    if (items.Inventory_item_id !== ''  &&  items.location !=='' && items.item_status !== '') {
                        let tableName = "";
                        let values = [];
                        let query = "";

                        switch (item_start) {
                            case "RAW":
                                tableName = "inventory_store_raw_items";
                                query = `UPDATE ${tableName} SET raw_item_location_id = ?, inventory_raw_item_status = ? WHERE raw_item_inventory_id = ?`; 
                                break;

                            case "NRAW":
                                tableName = "inventory_store_non_raw";
                                query = `UPDATE ${tableName} SET non_raw_location_id = ?, non_raw_item_status = ? WHERE non_raw_inventory_item_id = ?`;
                                break;

                            case "PRODUCT":
                                tableName = "inventory_store_products";
                                query = `UPDATE ${tableName} SET product_location_id = ?, inventory_product_status = ? WHERE inventory_product_id = ?`;
                                break;
                            default:
                                break;
                        }


                        values = [items.location,items.item_status,items.Inventory_item_id]
                        
                        promises.push(new Promise((resolveQuery, rejectQuery) => {
                            DB.connection.query(query, values, (err, result) => {
                                if (err) {
                                    console.error(err);
                                    rejectQuery(err);
                                } else {
                                    console.log(result);
                                    resolveQuery(result);
                                }
                            });
                        }));


                    }else{
                        console.log("Invalid data");
                    }

                    if (invalidItems.length > 0) {
                        console.log("Invalid data");
                        // res.status(400).send({ message: 'Invalid item data', invalidItems });
                        return;
                    }else {
                        Promise.all(promises)
                        .then(results => {
                            console.log('All queries completed successfully');
                            // res.status(200).send({ message: 'Inventory added successfully' });
                            resolve(results);
                        })
                        .catch(error => {
                            console.error('Error executing queries:', error);
                            // res.status(500).send({ message: 'Error executing queries' });
                            reject(error);
                        })
                    }

                
                }
    
    
            })

        }
        
    })




    console.log(req.body)

    const {po_id,po_items} = req.body;
    if(po_id && po_items.length>0){
        po_items.map((items)=>{
            
            const item_type = items.Inventory_item_id.split('-')[1];

            if(item_type === 'NRAW'){}
            else if (item_type === 'RAW'){}
            else if (item_type === 'PRODUCT'){ }
        })

    }
};
  
module.exports = StoreInventory;