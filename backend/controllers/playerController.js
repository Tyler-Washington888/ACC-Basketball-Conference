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

// const getPlayer = ( async (req, res) => {
//     let sql = 'SELECT * FROM Players ORDER BY TeamID ASC, LastName ASC, FirstName ASC';
//     let query = await db.query(sql, (err, players) => {
//         if(err) throw err;
//         res.status(200).json({players});
//     })
// })

// const updatePlayer = ( async (req, res) => {
//     let sql = 'SELECT * FROM Players ORDER BY TeamID ASC, LastName ASC, FirstName ASC';
//     let query = await db.query(sql, (err, players) => {
//         if(err) throw err;
//         res.status(200).json({players});
//     })
// })

// const deletePlayer = ( async (req, res) => {
//     let sql = 'SELECT * FROM Players ORDER BY TeamID ASC, LastName ASC, FirstName ASC';
//     let query = await db.query(sql, (err, players) => {
//         if(err) throw err;
//         res.status(200).json({players});
//     })
// })


module.exports = {
    getPlayers,
    createPlayer,
}