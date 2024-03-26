

const express = require('express');


const AddInventoryRequest = require('../controllers/inventory request/addInventoryRequest');
const SearchRequestAccToIdAndStatus = require('../controllers/inventory request/searchRequestAccToidAndStatus');
const RequestAccToId = require('../controllers/inventory request/requestAccToId');

const router = express.Router();


router.post('/add', AddInventoryRequest);
router.get('/search/request/:id/:status', SearchRequestAccToIdAndStatus);
router.get('/request/:id', RequestAccToId);




module.exports = router;