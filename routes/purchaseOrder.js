const express = require('express');


const searchItemAccToNameAndStatus = require('../controllers/purchase order/searchPoAccToPoIdAndstatus')

const router = express.Router();


router.get('/search/id/status/:id/:status',searchItemAccToNameAndStatus)


module.exports = router;