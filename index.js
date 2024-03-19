const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const app = express();
const socket = require("socket.io");
const PORT = 8080;



const DB = require('./config/Database.js');

const Item = require('./routes/item.js');
const ItemCategory = require('./routes/itemCategory.js');
const Inventory = require('./routes/inventory.js');
const Branch = require('./routes/branch.js');
const Store = require('./routes/stores.js');
const user = require('./routes/user.js');
const Supplier = require('./routes/supplier.js')
const Customer = require('./routes/customer.js')
const Pos = require('./routes/pos.js')
const InventoryRequest = require('./routes/inventoryRequest.js')
const PurchaseOrder = require('./routes/purchaseOrder.js')
const Dispose = require('./routes/dispose.js')






DB.connect()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: `${process.env.FrontEndUrl}`,
     credentials: true
   }));







// app.use('/inventory/raw', RawInventoryItems);

app.use('/item', Item);
app.use('/itemCategory', ItemCategory);
app.use('/inventory', Inventory);
app.use('/branch', Branch);
app.use('/store', Store);
app.use('/user', user);
app.use('/supplier', Supplier);
app.use('/customer', Customer);
app.use('/pos', Pos);
app.use('/inventoryRequest', InventoryRequest);
app.use('/purchase_order', PurchaseOrder)
app.use('/dispose', Dispose)






const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});






  app.use(express.static("public"));

  const io = socket(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    // ItemPurchased(io);

  

  
    socket.on("disconnect", function () {
        io.emit("user disconnected", socket.userId);
    }
    )
  });


 
//   setInterval(() => {
//     ItemPurchased(io);
// }, 5000);