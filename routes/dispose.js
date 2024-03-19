const express = require('express');


const AddDispose = require('../controllers/dispose/addDispose');


const router = express.Router();

router.post('/add', AddDispose);




module.exports = router;