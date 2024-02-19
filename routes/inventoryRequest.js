const express = require('express');

const AddRequestToStoreKeeper =  require('../controllers/inventory request/add_request_to_store_keeper');
const GetInventoryRequest = require('../controllers/inventory request/get_inventory_request');
const GetInventoryRequestItems = require('../controllers/inventory request/get_inventory_request_items');

const router = express.Router();


router.post('/add/request',AddRequestToStoreKeeper);
router.get('/get/request/:id', GetInventoryRequest);
router.get('/get/request/items/:id', GetInventoryRequestItems);

module.exports = router;