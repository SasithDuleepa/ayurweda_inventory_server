const DB = require('./../../config/Database');

const AddRolesToUser = (req,res) => {
    console.log(req.body)
    const {user,roles} = req.body;
    if(user !== '' && roles.length >0){

        roles.forEach(element => {
            const sql = ``
        });
    }
};

module.exports =AddRolesToUser;