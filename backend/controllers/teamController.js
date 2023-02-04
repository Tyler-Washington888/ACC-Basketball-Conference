const db = require("../config/db");


// @desc Get teams
// @route GET /teams/
// @Paccess Public
const getTeams = ((req, res) => {
    let sql = 'SELECT * FROM Teams';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).json({result})
    })
})


module.exports = {
  getTeams
};