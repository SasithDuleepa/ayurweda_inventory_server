const express = require('express');

const AddRawItem = require('../controllers/Raw Items/AddRawItem');
const SearchRawItem = require('../controllers/Raw Items/SearchRawItem');


const router = express.Router();

router.post('/add', AddRawItem);

router.get('/search/:name', SearchRawItem);


module.exports = router;