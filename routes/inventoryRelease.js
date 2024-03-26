const express = require('express');

const AddInventoryRelease = require('../controllers/inventory release/addInventoryRelease');

const router = express.Router();

router.post('/add', AddInventoryRelease);

module.exports = router;