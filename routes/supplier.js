const express = require('express');

const AddSupplier = require('../controllers/supplier/AddSupplier');
const SearchSupplier = require('../controllers/supplier/SearchSupplier');


const router = express.Router();

router.post('/add', AddSupplier);

router.get('/search/:name', SearchSupplier);

module.exports = router;