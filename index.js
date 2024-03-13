const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config();

const app = express();
const socket = require("socket.io");
const PORT = 8080;



const DB = require('./config/Database.js');






DB.connect()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: `${process.env.FrontEndUrl}`,
     credentials: true
   }));







// app.use('/inventory/raw', RawInventoryItems);








const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
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


 
//   setInterval(() => {
//     ItemPurchased(io);
// }, 5000);