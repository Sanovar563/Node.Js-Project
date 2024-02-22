
const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getAllRoles);

module.exports = router;
