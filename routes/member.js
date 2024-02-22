
const express = require('express');
const memberController = require('../controllers/memberController');
const router = express.Router();

router.post('/', memberController.addMember);
router.delete('/:id', memberController.removeMember);

module.exports = router;
