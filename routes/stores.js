const express = require('express');

const AddStore = require('../controllers/stores/addStore');
const SearchStoreAccToStoreNameAndStatus = require('../controllers/stores/searchStoreAccToStoreNameAndStatus');
const StoreAccToStoreId = require('../controllers/stores/storeAccToStoreId');
const UpdateStore = require('../controllers/stores/updateStore');
const DeleteStore = require('../controllers/stores/deleteStore');

const router = express.Router();


router.post('/add', AddStore);
router.post('/search/:name', SearchStoreAccToStoreNameAndStatus);
router.get('/:id', StoreAccToStoreId);
router.put('/:id', UpdateStore);
router.delete('/:id', DeleteStore);


module.exports = router;