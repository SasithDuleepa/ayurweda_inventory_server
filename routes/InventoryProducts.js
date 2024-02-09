const express = require('express');

const AddInventoryProducts = require('../controllers/inventory products/add_inventory_products');

const router = express.Router();

router.post('/add', AddInventoryProducts);

module.exports = router;