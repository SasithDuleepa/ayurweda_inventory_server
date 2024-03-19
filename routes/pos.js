const express = require('express');


const AddPos = require('../controllers/pos/addPos');
const SearchPosAccToPosIdAndStatus = require('../controllers/pos/searchPosAccToPosIdAndStatus');
const GetPos = require('../controllers/pos/getPos');
const SearchBillAccToBillIdAndBranchAndPosType = require('../controllers/pos/searchBillAccToBillIdAndBranchAndPosType');
const SearchBillAccToRateRangedAndBranchAndPosType = require('../controllers/pos/searchBillsAccToRateRangedAndBranchAndPosType');


const router = express.Router();


router.post('/addPos', AddPos);
router.get('/search/PosId/Status/:posId/:status', SearchPosAccToPosIdAndStatus);
router.get('/getPos/:id', GetPos);

router.get('/search/BillId/Branch/PosType/:billId/:branch/:posType', SearchBillAccToBillIdAndBranchAndPosType);
router.get('/search/RateRanged/Branch/PosType/:from/:to/:branch/:posType', SearchBillAccToRateRangedAndBranchAndPosType);

module.exports = router;