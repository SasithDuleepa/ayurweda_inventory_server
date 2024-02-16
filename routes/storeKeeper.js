const express = require('express');

const AddRequestToStoreKeeper =  require('../controllers/inventory manager/add_request_to_store_keeper');

const router = express.Router();


router.post('/add/request',AddRequestToStoreKeeper);

module.exports = router;