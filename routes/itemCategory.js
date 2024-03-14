const express = require('express');

const AddItemCategory = require('../controllers/item category/addItemCategory');
const GetItemCategoryAccToItemId = require('../controllers/item category/itemCategoryAccToId');
const UpdateItemCategory = require('../controllers/item category/updateItemCategory');
const ItemCategoryAccToIdAndStatus = require('../controllers/item category/itemCategoryAccToIdStatus');
const DeleteItemCategory = require('../controllers/item category/deleteItemCategory');
const ItemCategoryAccToStatus  = require('../controllers/item category/itemCategoryAccToStatus');



const router = express.Router();

router.post('/add', AddItemCategory);
router.get('/category/item_id/:id', GetItemCategoryAccToItemId);
router.put('/update', UpdateItemCategory);
router.get('/status-category/:status/:category', ItemCategoryAccToIdAndStatus);
router.delete('/delete/:id', DeleteItemCategory);
router.get('/status/:status', ItemCategoryAccToStatus);


module.exports = router;