const express = require('express');


const GetJobAccToId = require('../controllers/job/get_job_acc_to_job_id');

const router = express.Router();


router.get('/job/:id', GetJobAccToId);


module.exports = router;