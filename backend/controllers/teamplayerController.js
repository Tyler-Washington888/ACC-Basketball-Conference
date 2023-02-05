const db = require("../config/db");

//@desc GET number of players on each team
//@route GET /numofplayers
//@access Public 
const getNumOfPlayers = (async (req, res) => {
    let sql = `SELECT Teams.TeamName AS Team, COUNT(Players.PlayerID) AS "Num of Players" FROM Players RIGHT JOIN Teams ON Players.TeamID = Teams.TeamID GROUP BY TeamName ORDER BY Teams.TeamName`;
    let query = await db.query(sql, (err, teams) => {
      if(err) throw err;
      res.status(200).json(teams)
    })
})




  module.exports = {
    getNumOfPlayers
  };

