const express = require('express')
const router = express.Router();
const {getTeams, getTeam, createTeam, updateTeam, deleteTeam, getNumOfPlayers} = require('../controllers/teamController');


// get teams && post team
router.route('/').get(getTeams).post(createTeam)
// get team && update team && delete team
router.route('/:teamID').get(getTeam).put(updateTeam).delete(deleteTeam)

module.exports = router;