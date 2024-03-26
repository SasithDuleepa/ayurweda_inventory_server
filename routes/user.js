const express = require('express');

const AddUser = require('../controllers/user/addUser');
const SearchUserAccToUserNameAndStatus = require('../controllers/user/SearchUserAccToUserNameAndStatus');


const router = express.Router();

router.post('/add', AddUser);
router.get('/search/name/status/:name/:status', SearchUserAccToUserNameAndStatus);


module.exports = router;

