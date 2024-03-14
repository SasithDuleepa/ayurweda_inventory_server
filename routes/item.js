const express = require('express');

const AddItem = require('../controllers/item/addItem');
const UpdateItem = require('../controllers/item/updateItem');
const GetItemAccToItemId = require('../controllers/item/getItemAccId');
const SearchItemsAccToItemNameAndStatus = require('../controllers/item/searchItemAccToNameAndStatus');
const DeleteItem = require('../controllers/item/deleteItem');

const router = express.Router();

router.post('/add', AddItem);
router.put('/update/:id', UpdateItem);
router.get('/item/:id', GetItemAccToItemId);
router.delete('/delete/:id', DeleteItem);


router.get('/search/name-status/:status/:name', SearchItemsAccToItemNameAndStatus);


module.exports = router;