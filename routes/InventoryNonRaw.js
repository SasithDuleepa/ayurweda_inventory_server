const express = require('express');

const AddInventoryNonRaw = require('../controllers/inventory non raw/add_inventory_non_raw');
const NonRawAccToStatusAndId = require('../controllers/inventory non raw/non_raw_acc_to_status_and_id'); 
const NonRawAccToStatusAndInventoryId = require('../controllers/inventory non raw/non_raw_acc_to_inventory_id');
const router = express.Router();

router.post('/add', AddInventoryNonRaw);
router.get('/:status/:id', NonRawAccToStatusAndId);
router.get('/item/:status/:id', NonRawAccToStatusAndInventoryId);


module.exports = router;