const express = require('express');

const AddSupplier = require('../controllers/supplier/AddSupplier');
const SearchSupplier = require('../controllers/supplier/SearchSupplier');
const SupplierAcctoId = require('../controllers/supplier/supplierAccToId');


const router = express.Router();

router.post('/add', AddSupplier);

router.get('/search/:name', SearchSupplier);

router.get('/:id', SupplierAcctoId);

module.exports = router;