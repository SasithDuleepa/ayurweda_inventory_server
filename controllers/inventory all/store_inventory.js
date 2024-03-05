const DB = require('../../config/Database');

const StoreInventory = (req,res) => {
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