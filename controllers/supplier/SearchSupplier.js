const DB = require('../../config/Database');
const SearchSupplier = (req,res) =>{
    const{name } = req.params;
    if(name !== ''){
        const sql = `SELECT * FROM supplier WHERE supplier_name LIKE '%${name}%'`;
        DB.connection.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result);
        }
        )
    }

}
module.exports = SearchSupplier;