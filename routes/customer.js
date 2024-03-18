const express = require('express');


const AddCustomer = require('../controllers/customer/addCustomer');
const SearchCustomerAccToNameOrContactNoAndStatus = require('../controllers/customer/searchCustomerAccToNameOrContactNoAndStatus');

const router = express.Router();

router.post('/add', AddCustomer);
router.get('/search/name/contact/status/:nameorcontact/:status', SearchCustomerAccToNameOrContactNoAndStatus);

module.exports = router;