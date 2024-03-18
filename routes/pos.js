const express = require('express');


const AddPos = require('../controllers/pos/addPos');
const SearchPosAccToPosIdAndStatus = require('../controllers/pos/searchPosAccToPosIdAndStatus');
const GetPos = require('../controllers/pos/getPos');


const router = express.Router();


router.post('/addPos', AddPos);
router.get('/search/PosId/Status/:posId/:status', SearchPosAccToPosIdAndStatus);
router.get('/getPos/:id', GetPos);

module.exports = router;