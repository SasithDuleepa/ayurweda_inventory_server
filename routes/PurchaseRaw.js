const express = require('express');


const PurchaseRawItems = require('./../controllers/purchace raw items/PurchaseRawItems');

const router = express.Router();

router.post('/buy',PurchaseRawItems);

module.exports = router;