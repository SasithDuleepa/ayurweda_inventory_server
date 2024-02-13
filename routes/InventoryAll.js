const express = require('express');

const GetAllAccToName = require('../controllers/inventory all/get_all_acc_to_name');
const GetQtyAccToItemId = require('../controllers/inventory all/get_qty_acc_to_item_id');

const router = express.Router();

router.get('/:name', GetAllAccToName);  
router.get('/qty/:id', GetQtyAccToItemId);

module.exports = router;