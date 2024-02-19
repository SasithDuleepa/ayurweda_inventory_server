const express = require('express');

const AddInventoryProducts = require('../controllers/inventory products/add_inventory_products');
const ProductsAccToStatusAndItemId = require('../controllers/inventory products/products_acc_to_status_and_id');
const ProductsAccToStatusAndInventoryId = require('../controllers/inventory products/product_acc_to_inventory_id');

const router = express.Router();

router.post('/add', AddInventoryProducts);
router.get('/:status/:id', ProductsAccToStatusAndItemId);
router.get('/item/:status/:id', ProductsAccToStatusAndInventoryId);

module.exports = router;