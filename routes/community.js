
const express = require('express');
const communityController = require('../controllers/communityController');
const router = express.Router();

router.get('/', communityController.getAllCommunities);
router.post('/', communityController.createCommunity);

module.exports = router;
