const express = require('express')
const router = express.Router();
// getPlayer, updatePlayer, deletePlayer
const { getPlayers, createPlayer } = require('../controllers/playerController');


router.route('/').get(getPlayers).post(createPlayer)
// router.route('/:playerID').get(getPlayer).update(updatePlayer).delete(deletePlayer)


module.exports = router;

