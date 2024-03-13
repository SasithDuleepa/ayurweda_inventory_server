const express = require('express');

const AddItem = require('../controllers/item/addItem');
const UpdateItem = require('../controllers/item/updateItem');
const GetItemAccToItemId = require('../controllers/item/getItemAccId');
const SearchItemsAccToItemNameAndStatus = require('../controllers/item/searchItemAccToNameAndStatus');

const router = express.Router();

router.post('/add', AddItem);
router.put('/update/:id', UpdateItem);
// router.get('/:id', GetItemAccToItemId);


router.get('/search', SearchItemsAccToItemNameAndStatus);


module.exports = router;