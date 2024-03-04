const express = require('express');


const SearchPo = require('./../controllers/purchase/search_po');
const PoItems = require('./../controllers/purchase/get_po_items')




const router = express.Router();

router.get('/search/:id', SearchPo)
router.get('/po_items/:id',PoItems)


module.exports = router;