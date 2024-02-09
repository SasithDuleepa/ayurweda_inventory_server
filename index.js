const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const DB = require('./config/Database.js');


//store
const RawInventoryItems = require('./routes/InventoryRawItems.js')  
 

const app = express();

DB.connect()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: `${process.env.FrontEndUrl}`,
     credentials: true
   }));







app.use('/inventory/raw', RawInventoryItems);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });