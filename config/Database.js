const mysql = require('mysql');
require('dotenv').config();

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        // this.connection = mysql.createConnection({
        //     host: process.env.DB_HOST,
        //     user: process.env.DB_USER,
        //     password: process.env.DB_PASSWORD,
        //     database:process.env.DB_NAME,
        //     port: process.env.DB_PORT,  
        //     ssl  : {
        //         ca : fs.readFileSync('<path to CA cert file>'),
        //         rejectUnauthorized: true
        //         }
        // });
    }

    connect(){
        this.connection.connect((err)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log('Connected to database');
            });
        }

    disconnect(){
        this.connection.end((err)=>{            
            if(err) {
                console.log('Error disconnecting from database');
                return;
            }
            console.log('Disconnected from database');
            });
        }
}

module.exports = new Database;