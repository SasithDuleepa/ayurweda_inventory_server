const express = require('express');

const GetAllAccToName = require('../controllers/inventory all/get_all_acc_to_name');
const GetQtyAccToItemId = require('../controllers/inventory all/get_qty_acc_to_item_id');
const GetUnitPriceAccToItemId = require('../controllers/inventory all/get_unit_price_acc_to_id');
const GetAllItemsAccToItemId = require('../controllers/inventory all/get_all_items_acc_to_item_id');
const AddInventory = require('../controllers/inventory all/add_inventory');
const GetAccToPo = require('../controllers/inventory all/get_acc_to_po');

const StoreInventory = require('../controllers/inventory all/store_inventory');

const router = express.Router();

router.get('/:name', GetAllAccToName);  
router.get('/qty/:id', GetQtyAccToItemId);
router.get('/unitprice/:id', GetUnitPriceAccToItemId);
router.get('/allitems/:id', GetAllItemsAccToItemId);
router.get('/items/:po', GetAccToPo);
router.post('/', AddInventory);

router.post('/store', StoreInventory);

module.exports = router;