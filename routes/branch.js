const express = require('express');

const AddBranch = require('../controllers/branch/addBranch');


const router = express.Router();

router.post('/addBranch', AddBranch);



module.exports = router;