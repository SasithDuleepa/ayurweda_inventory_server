const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const DB = require('./config/Database.js');

const PurchaseRaw = require('./routes/PurchaseRaw.js');
const RawItems = require('./routes/RawItems.js')
const Supplier = require('./routes/supplier.js')
 

const app = express();

DB.connect()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: `${process.env.FrontEndUrl}`,
     credentials: true
   }));


   app.use('/raw' , RawItems)
   app.use('/supplier' , Supplier)

app.use('/purchase/raw' , PurchaseRaw)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });