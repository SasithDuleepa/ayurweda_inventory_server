const express = require('express');

const AddCustomer = require('../controllers/customer/add_customer');
const SearchCustomer = require('../controllers/customer/search_customer');
const GetCustomer = require('../controllers/customer/get_customer');

const router = express.Router();

router.post('/add', AddCustomer);
router.get('/search/:name', SearchCustomer);
router.get('/:id', GetCustomer);

module.exports = router;