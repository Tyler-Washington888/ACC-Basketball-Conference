const express = require('express')
const router = express.Router();
const {getTeams, getTeam} = require('../controllers/teamController')


// get all teams
router.route('/').get(getTeams)
// get team
router.route('/:teamID').get(getTeam)

module.exports = router ;