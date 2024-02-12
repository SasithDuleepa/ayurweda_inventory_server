const express = require('express');

const AddInventoryProducts = require('../controllers/inventory products/add_inventory_products');
const ProductsAccToStatusAndItemId = require('../controllers/inventory products/products_acc_to_status_and_id');

const router = express.Router();

router.post('/add', AddInventoryProducts);
router.get('/:status/:id', ProductsAccToStatusAndItemId);

module.exports = router;