const express = require('express');

const AddInventoryRawItems = require('../controllers/inventory raw items/add_inventory_raw_items');   


const router = express.Router();

router.post('/add', AddInventoryRawItems);



module.exports = router;