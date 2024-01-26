
const DB = require('../../config/Database');
const AddRawItem = (req,res) => {
    console.log(req.body)
    const {itemName,itemShortName,itemCode, itemMeasureUnit,itemUnitPrice,itemDescription,user,date} = req.body;

    if(itemName!=='' && itemShortName!==''  && itemCode!==''  && itemMeasureUnit!==''  && itemUnitPrice!==''  && itemDescription!==''  && user!==''  && date!=='' ){

    //check item already create
        const sql_1 = "SELECT * FROM raw_item WHERE raw_item_id = ? AND raw_item_name = ?";
        DB.connection.query(sql_1,[itemCode,itemName],(err,result)=>{
            if (err) {
               
                return res.status(500).json({ message: "Error checking Item existence" });
              }
          
              if (result.length > 0) {
                // Place with the same name already exists
                return res.status(409).json({ message: "Item with the same ID already exists" }); 
              }


              const sql = "INSERT INTO raw_item (raw_item_id,raw_item_name,raw_item_short_name,raw_item_measure_unit,raw_item_unit_price,raw_item_created_user_id,raw_item_created_date,raw_item_description,raw_item_status) VALUES (?,?,?,?,?,?,?,?,?)";
              DB.connection.query(sql,[itemCode,itemName,itemShortName,itemMeasureUnit,itemUnitPrice,user,date,itemDescription,1],(err,result)=>{
                  if(result){
                      res.status(200).json({message:"Raw Item Added Successfully"});
                  }else{
                      res.status(500).json({message:err});
                  }
              }
              )
        })





       
    }else{
        res.status(400).json({message:"Bad Request"});
    }
}

module.exports = AddRawItem;