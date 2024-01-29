const express = require('express');


const PurchaseRawItems = require('./../controllers/purchace raw items/PurchaseRawItems');
const SearchForRawStore = require('../controllers/purchace raw items/search_for_raw_store');
const RawAccToInvoiceId = require('../controllers/purchace raw items/raw_accto_invoice_id');

const SearchRawInvoice = require('../controllers/purchace raw items/search_Raw_invoice');
const SearchForRawLabReport = require('../controllers/purchace raw items/search_for_raw_labReport');

const StoreRaw = require('../controllers/purchace raw items/store_raw');
const LabReportUpdate = require('../controllers/purchace raw items/lab_report_raw');
const RawRelease = require('../controllers/purchace raw items/raw_release');

const router = express.Router();

router.post('/add',PurchaseRawItems);
router.get('/raw/:invoice_id',RawAccToInvoiceId);

router.get('/search/forstore/:invoice_id',SearchForRawStore);
router.get('/search/raw/:invoice_id',SearchRawInvoice);
router.get('/search/labreport/:invoice_id',SearchForRawLabReport);

router.post('/store',StoreRaw);
router.post('/labreport',LabReportUpdate);
router.post('/release',RawRelease);

module.exports = router;