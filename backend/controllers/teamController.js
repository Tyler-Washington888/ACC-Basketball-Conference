const db = require("../config/db");


// @desc Get teams
// @route GET /teams/
// @Paccess Public
const getTeams = ((req, res) => {
    let sql = 'SELECT * FROM Teams';
    db.query(sql, (err, teams) => {
        if(err) throw err;
        res.status(200).json({teams});
    })
})

// @desc Get one team
// @route GEt/teams/:teamID
// @access Public 
const getTeam = ((req, res) => {
  let sql = `SELECT * FROM Teams WHERE TeamID = ${req.params.teamID}`;
  let query = db.query(sql, (err, team)  => {
    if (err) throw err;
    res.status(200).json({team});
  })
})



module.exports = {
  getTeams,
  getTeam
};