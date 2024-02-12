const express = require('express');

const AddInventoryRawItems = require('../controllers/inventory raw items/add_inventory_raw_items');
const GetAllInventoryRawItemsAccToStatus = require('../controllers/inventory raw items/all_inventory_raw_items_according_to_status');
const RawItemsAccToStatusAndItemId = require('../controllers/inventory raw items/raw_items_acc_to_status_and_item_id');

const router = express.Router();

router.post('/add', AddInventoryRawItems);
router.get('/all/:status', GetAllInventoryRawItemsAccToStatus);
router.get('/:status/:id', RawItemsAccToStatusAndItemId);



module.exports = router;