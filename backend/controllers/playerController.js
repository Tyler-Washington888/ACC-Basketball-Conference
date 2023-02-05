const db = require("../config/db");


// @desc Get teams
// @route GET /teams/
// @Paccess Public
const getPlayers = ( async (req, res) => {
    let sql = 'SELECT * FROM Players ORDER BY TeamID ASC, LastName ASC, FirstName ASC';
    let query = await db.query(sql, (err, players) => {
        if(err) throw err;
        res.status(200).json({players});
    })
})

// @desc POST player
// @route POST /players/
// @Process Public
const createPlayer = (async (req, res) => {
    let player = [[req.body.FirstName,req.body.LastName,req.body.YOE, req.body.TeamID ]]
    let sql = 'INSERT INTO Players(FirstName, LastName, YOE, TeamID) Values ?';
    let query = await db.query(sql, [player], (err, result) => {
        if(err) throw err;
        res.status(200).json({result});
    })
})

// @desc GET player
// @route GET /players/:playerID
// @acces Public
const getPlayer = ( async (req, res) => {
    let id = req.params.playerID
    let sql = `SELECT * FROM Players WHERE PlayerID = ?`;
    let query = await db.query(sql, id, (err, player) => {
        if(err) throw err;
        res.status(200).json({player});
    })
})

// @desc PUT player
// @route PUT /players/:playerID
// @acces Public
const updatePlayer = ( async (req, res) => {
    let sql = `UPDATE Players SET ? WHERE PlayerID = ${req.params.playerID}`;
    let query = await db.query(sql, [{FirstName: req.body.FirstName, LastName: req.body.LastName, YOE: req.body.YOE, TeamID: req.body.TeamID}], (err, result) => {
        if(err) throw err;
        res.status(200).json({result});
    })
})

// @desc DELETE player
// @route DELETE /players/:playerID
// @acces Public
const deletePlayer = ( async (req, res) => {
    let sql = `DELETE FROM Players WHERE PlayerID = ${req.params.playerID}`
    let query = await db.query(sql, (err, result) => {
      if(err) throw err;
      res.status(200).json(result)
    })
})

module.exports = {
    getPlayers,
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
}