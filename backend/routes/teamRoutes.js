const express = require('express')
const router = express.Router();
const {getTeams, getTeam, createTeam, updateTeam} = require('../controllers/teamController')


// get teams && post team
router.route('/').get(getTeams).post(createTeam)
// get team && update team
router.route('/:teamID').get(getTeam).put(updateTeam)

module.exports = router;