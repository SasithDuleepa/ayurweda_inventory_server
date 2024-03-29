const express = require('express');

const GetUserRoles = require('./../controllers/userRoles/getUserRoles')

const ModulesAccToUserId = require('./../controllers/userRoles/modulesAccToUserId')

const AddRolesToUser = require('./../controllers/userRoles/addRolesToUser')
const GetRolesAccToUserId = require('./../controllers/userRoles/getRolesAccToUserId')

const router = express.Router();

router.get('/all', GetUserRoles);

router.get('/modules/:id', ModulesAccToUserId);

router.post('/add', AddRolesToUser);


router.get('/roles/:user_id', GetRolesAccToUserId);

module.exports = router;