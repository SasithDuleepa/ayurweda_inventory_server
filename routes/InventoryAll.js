const express = require('express');

const GetAllAccToName = require('../controllers/inventory all/get_all_acc_to_name');

const router = express.Router();

router.get('/:name', GetAllAccToName);  

module.exports = router;