const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const socket = require("socket.io");
const PORT = 8080;



const DB = require('./config/Database.js');


const ItemPurchased = require('./controllers/notification/itemPurchased.js');


//store
const RawInventoryItems = require('./routes/InventoryRawItems.js');
const ProductInventory = require('./routes/InventoryProducts');
const NonRaw = require('./routes/InventoryNonRaw');
const AllInventory = require('./routes/InventoryAll.js');
const InventoryRequest = require('./routes/inventoryRequest.js');
const Customer = require('./routes/customer.js');
const Purchase = require('./routes/inventoryPurchase.js')


//job
const Job = require('./routes/job.js');
 



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

app.use('/customer', Customer);
app.use('/purchase', Purchase);





// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
//   });

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});






  app.use(express.static("public"));

  const io = socket(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    ItemPurchased(io);

  

  
    socket.on("disconnect", function () {
        io.emit("user disconnected", socket.userId);
    }
    )
  });


 
  setInterval(() => {
    ItemPurchased(io);
}, 5000);