const express = require('express');

const GetUserRoles = require('./../controllers/userRoles/getUserRoles')

const ModulesAccToUserId = require('./../controllers/userRoles/modulesAccToUserId')

const AddRolesToUser = require('./../controllers/userRoles/addRolesToUser')

const router = express.Router();

router.get('/all', GetUserRoles);

router.get('/modules/:id', ModulesAccToUserId);

router.post('/add', AddRolesToUser);

module.exports = router;