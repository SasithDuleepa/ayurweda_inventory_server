const express = require('express');

const AddItemCategory = require('../controllers/item category/addItemCategory');
const GetItemCategoryAccToItemId = require('../controllers/item category/itemCategoryAccToId');
const UpdateItemCategory = require('../controllers/item category/updateItemCategory');
const ItemCategoryAccToIdAndStatus = require('../controllers/item category/itemCategoryAccToIdStatus');
const DeleteItemCategory = require('../controllers/item category/deleteItemCategory');
const ItemCategoryAccToStatus  = require('../controllers/item category/itemCategoryAccToStatus');



const router = express.Router();

router.post('/add', AddItemCategory);
router.get('/category', GetItemCategoryAccToItemId);
router.put('/update', UpdateItemCategory);
router.get('', ItemCategoryAccToIdAndStatus);
router.delete('/delete', DeleteItemCategory);
router.get('/status', ItemCategoryAccToStatus);


module.exports = router;