

const express = require('express');


const AddInventoryRequest = require('../controllers/inventory request/addInventoryRequest');


const router = express.Router();


router.post('/add', AddInventoryRequest);




module.exports = router;