const DB = require('../../config/Database');

let lengthArray = []

const ItemPurchased = (io) => {
    // Define lastCheckTimestamp if needed
    let lastCheckTimestamp = Date.now();

    // Query the database for pending inventory requests
    DB.connection.query('SELECT * FROM inventory_request WHERE inventory_request_status = "PENDING"', (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            return;
        }
        


        
        lengthArray.push(results.length);
        if(lengthArray.length > 2 ){
            console.log(lengthArray);
            lengthArray.shift();
            console.log(lengthArray);
        }
            if(lengthArray[0] < lengthArray[1]){
                // Emit Socket.IO event for each pending inventory request

                io.emit('statusChange', results[results.length-1] );

            }
      

        // Emit Socket.IO event for each pending inventory request
        // results.forEach(row => {
        //     io.emit('statusChange', row );
        //     // console.log(row);
        // });

        // Update lastCheckTimestamp to the current time
        lastCheckTimestamp = Date.now();
    });
}

module.exports = ItemPurchased;