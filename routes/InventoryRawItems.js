const express = require('express');

const AddInventoryRawItems = require('../controllers/inventory raw items/add_inventory_raw_items');
const GetAllInventoryRawItemsAccToStatus = require('../controllers/inventory raw items/all_inventory_raw_items_according_to_status');


const router = express.Router();

router.post('/add', AddInventoryRawItems);
router.get('/all/:status', GetAllInventoryRawItemsAccToStatus);



module.exports = router;