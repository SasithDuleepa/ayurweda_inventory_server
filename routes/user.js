const express = require('express');

const AddUser = require('../controllers/user/addUser');
const SearchUserAccToUserNameAndStatus = require('../controllers/user/SearchUserAccToUserNameAndStatus');


const router = express.Router();

router.post('/add', AddUser);
router.post('/search/name/status/:name/:status', SearchUserAccToUserNameAndStatus);


module.exports = router;

