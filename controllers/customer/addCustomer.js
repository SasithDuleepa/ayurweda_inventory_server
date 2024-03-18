const DB = require('./../../config/Database');

const AddCustomer = (req,res) => {
    const {customer_id, customer_name, customer_contact_no, customer_nic,customer_address, customer_email,customer_type, reg_no, customer_status, customer_update_date, customer_update_user_id} = req.body;
    console.log(req.body)
    if(customer_id !== '' && customer_name !== '' && customer_contact_no !== '' && customer_update_date !== "" && customer_update_user_id !== "" ){
        DB.connection.query('INSERT INTO customer (customer_id, customer_name, customer_contact_no, customer_nic,customer_address, customer_email,customer_type, reg_no, customer_status, customer_update_date, customer_update_user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
         [customer_id, customer_name, customer_contact_no, customer_nic,customer_address, customer_email,customer_type, reg_no, 'ACTIVE', customer_update_date, customer_update_user_id],
          (err, result) => {
            if(err){
                console.log(err);
                res.status(500).send(err)
            }else{
                res.status(200).send(result);
            }
        })
    
    }

};

module.exports = AddCustomer;