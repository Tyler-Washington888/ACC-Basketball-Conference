const express = require('express')
const router = express.Router();
const { getPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer } = require('../controllers/playerController');


router.route('/').get(getPlayers).post(createPlayer);
router.route('/:playerID').get(getPlayer).put(updatePlayer).delete(deletePlayer);

module.exports = router;

