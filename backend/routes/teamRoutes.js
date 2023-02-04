const express = require('express')
const router = express.Router();
const {getTeams} = require('../controllers/teamController')


// get all teams
router.route('/').get(getTeams)

module.exports = router ;