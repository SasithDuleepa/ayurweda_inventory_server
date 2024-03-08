const express = require('express');

const AddBranch = require('../controllers/branch/addBranch')
const GetAllBranches = require('../controllers/branch/getAllBranches')
const GetBranchAccToStatus = require('../controllers/branch/getBranchAccTostatus')


const router = express.Router();

router.post('/add', AddBranch);
router.get('/get', GetAllBranches);
router.get('/get/:status', GetBranchAccToStatus);


module.exports = router;