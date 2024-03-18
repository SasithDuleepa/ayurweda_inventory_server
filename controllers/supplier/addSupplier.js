const DB = require('./../../config/Database');

const AddSupplier = (req,res) => {
    const {supplier_id, supplier_name, supplier_nic, supplier_address, supplier_contact_no, supplier_update_date, supplier_update_user_id} = req.body;

    if( supplier_id !== "" && supplier_name !== "" && supplier_nic !== "" && supplier_address !== "" && supplier_contact_no !== "" && supplier_update_date !== "" && supplier_update_user_id !== ""){
        const sql = `INSERT INTO supplier (supplier_id, supplier_name, supplier_nic, supplier_address, supplier_contact_no, supplier_status, supplier_update_date, supplier_update_user_id) VALUES (?,?,?,?,?,?,?,?);`
        DB.connection.query(sql,[supplier_id, supplier_name, supplier_nic, supplier_address, supplier_contact_no,'ACTIVE', supplier_update_date, supplier_update_user_id],(err,result)=>{
            if(result){
                res.status(200).send(result);
            }else{
                res.status(500).send(err)
            }
        })
    }
};

module.exports = AddSupplier;