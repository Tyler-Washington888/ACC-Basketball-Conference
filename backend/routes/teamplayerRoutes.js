const express = require('express');
const router = express.Router();
const {getNumOfPlayers} = require('../controllers/teamplayerController');

router.route('/').get(getNumOfPlayers)

module.exports = router;