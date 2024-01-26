const DB = require('../../config/Database');
const AddSupplier = (req,res) =>{
    const{supplierId,supplierName,supplierEmail,supplierPhone,supplierAddress,supplierNIC,date}=req.body;

    if(supplierId !=='' && !supplierName !=='' && !supplierEmail !=='' && !supplierPhone !=='' && !supplierAddress !=='' && !supplierNIC !=='' && !date !==''){

        //check supplier already create
        const sql_1 = "SELECT * FROM supplier WHERE supplier_id = ? OR supplier_name=? OR supplier_email=? OR supplier_phone=?";
        DB.connection.query(sql_1,[supplierId,supplierName,supplierEmail,supplierPhone],(err,result)=>{
            if (err) {
               
                return res.status(500).json({ message: "Error checking Supplier existence" });
              }
          
              if (result.length > 0) {
                // Place with the same name already exists
                return res.status(409).json({ message: "Supplier with the same ID already exists" }); 
              }



              const sql = `INSERT INTO supplier (supplier_id,supplier_name,supplier_email,supplier_phone,supplier_address,supplier_nic,supplier_add_date,supplier_status) VALUES ('${supplierId}','${supplierName}','${supplierEmail}','${supplierPhone}','${supplierAddress}','${supplierNIC}','${date}','active')`;
            DB.connection.query(sql,(err,result)=>{
                if(err) {
                    res.status(500).send(err)
                }
                else if(result){
                    res.status(200).json({message:"Supplier Added Successfully"});
                }
            })
        })


            
        }else{
            res.status(400).json({message:"Bad Request"});
        }

    
};

module.exports = AddSupplier;