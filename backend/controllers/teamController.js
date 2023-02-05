const db = require("../config/db");


// @desc Get teams
// @route GET /teams/
// @Paccess Public
const getTeams = ( async (req, res) => {
    let sql = 'SELECT * FROM Teams';
    await db.query(sql, (err, teams) => {
        if(err) throw err;
        res.status(200).json({teams});
    })
})

// @desc GET team
// @route GET /teams/:teamID
// @access Public 
const getTeam = ( async (req, res) => {
  let sql = `SELECT * FROM Teams WHERE TeamID = ${req.params.teamID}`;
  let query = await db.query(sql, (err, team)  => {
    if (err) throw err;
    res.status(200).json({team});
  });
})

//@desc POST team
//@route POST /teams/
//@access Public
const createTeam = ( async (req, res) => {
  let team = [[req.body.TeamName, req.body.Mascot]]
  let sql = `INSERT INTO Teams(TeamName, Mascot) VALUES ?`
  let query = await db.query(sql, [team], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  })
})

//@desc PUT team
//@route PUT /teams/:teamID
//@access Public
const updateTeam = (async (req, res) => {
  let sql = `UPDATE Teams SET ? WHERE TeamID = ${req.params.teamID}`;
  let query = await db.query(sql, [{TeamName: req.body.TeamName, Mascot: req.body.Mascot}], (err, result) => {
    if(err) throw err;
    res.status(200).json(result);
  })
})


//@desc DELETE team
//@route DELETE /teams/:teamID
//@access Public
const deleteTeam = (async (req, res) => {
  let sql = `DELETE FROM Teams WHERE TeamID = ${req.params.teamID}`
  let query = await db.query(sql, (err, result) => {
    if(err) throw err;
    res.status(200).json(result)
  })
})

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};