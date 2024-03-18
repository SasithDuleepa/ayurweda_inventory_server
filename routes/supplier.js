const express = require('express');

const AddSupplier = require('../controllers/supplier/addSupplier');

const router = express.Router();


router.post('/add', AddSupplier);   


module.exports = router;