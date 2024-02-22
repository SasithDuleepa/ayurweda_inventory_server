const DB = require('../../config/Database');

const AddCustomer = (req,res) => {
    console.log(req.body);
    const {customer_id, customer_name, customer_nic, customer_address, customer_contact, customer_email, customer_type, customer_reg_no, customer_added_date, customer_added_user_id} = req.body;
    if(customer_id === '' || customer_name === '' || customer_nic === '' || customer_address === '' || customer_contact === '' || customer_email === '' || customer_type === '' || customer_added_date === '' || customer_added_user_id === ''){
        res.status(400).send('please fill all fields')
    }else{
        const sql = `INSERT INTO customer (customer_id,customer_name, customer_nic, customer_address, customer_contact, customer_email, customer_type, customer_reg_no, customer_added_date, customer_added_user_id,customer_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        DB.connection.query(sql, [customer_id,customer_name, customer_nic, customer_address, customer_contact, customer_email, customer_type, customer_reg_no, customer_added_date, customer_added_user_id, 'ACTIVE'], (err, result) => {
            if(err){
                res.status(500).send(err);
            }
                res.status(201).send('Customer added successfully');
        }
        )
        
    }

};

module.exports = AddCustomer;