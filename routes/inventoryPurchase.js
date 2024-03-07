const express = require('express');


const SearchPo = require('./../controllers/purchase/search_po');
const PoItems = require('./../controllers/purchase/get_po_items')

const SearchPoIdStatus = require('./../controllers/purchase/search_po_id_status');




const router = express.Router();

router.get('/search/:id', SearchPo)
router.get('/Search/:id/:status', SearchPoIdStatus)
router.get('/po_items/:id',PoItems)


module.exports = router;