const express = require('express');

const AddBranch = require('../controllers/branch/addBranch');
const SearchBranchAccToBranchNameAndStatus = require('../controllers/branch/searchBranchAccToBranchNameAndStatus');
const BranchAccToBranchId = require('../controllers/branch/branchAccToBranchId');
const UpdateBranch = require('../controllers/branch/updateBranch');
const DeleteBranch = require('../controllers/branch/deleteBranch');
const AllBranchAccToStatus = require('../controllers/branch/allBranchAccToStatus');

const router = express.Router();

router.post('/addBranch', AddBranch);
router.post('/search/BranchName/Status/:name/:status', SearchBranchAccToBranchNameAndStatus);
router.get('/branch/:id', BranchAccToBranchId);
router.put('/update/Branch/:id', UpdateBranch);
router.delete('/delete/Branch/:id', DeleteBranch);
router.get('/all/Branch/:status', AllBranchAccToStatus);



module.exports = router;