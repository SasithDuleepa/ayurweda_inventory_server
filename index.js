const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const DB = require('./config/Database.js');


//store
const RawInventoryItems = require('./routes/InventoryRawItems.js');
const ProductInventory = require('./routes/InventoryProducts');
const NonRaw = require('./routes/InventoryNonRaw');
const AllInventory = require('./routes/InventoryAll.js');
const InventoryRequest = require('./routes/inventoryRequest.js');


//job
const Job = require('./routes/job.js');
 

const app = express();

DB.connect()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: `${process.env.FrontEndUrl}`,
     credentials: true
   }));







app.use('/inventory/raw', RawInventoryItems);
app.use('/inventory/product', ProductInventory);
app.use('/inventory/non-raw', NonRaw);
app.use('/inventory/all', AllInventory);

app.use('/job', Job);
app.use('/request', InventoryRequest);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });