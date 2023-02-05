# ACC-Basketball-Conference
- [Overview](#overview)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)

<br>

## Project Overview

**ACC-Basketball-Conference** is a backend app I built to gain experience using MySQL in tandem with Node.js and Express. In this project users have access to the acc_basketball_conference database where they can perform full crud operations on both the Teams and Players table. Additonally, they can utilize the relationships between the tables to find the number of players on each team.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- | 
| Express | back-end framework for building RESTful APIs in Node.js |
| colors| color-management system used to style NodeJS console | 
| MySQL | open-source relational database management system |
| cors | allows a server to indicate any origins from which a browser should permit loading resources|
| nodemon | command-line tool that automatically restarts app when it detects changes|

<br>

#### ERD Model

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1675587163/acc-basketball-conference/Screen_Shot_2023-02-05_at_3.22.39_AM_jifibz.png)

<br>

***

***
## Code Showcase

This middleware fuunction 'getNumOfPlayers' was my favorite snippet from this project. It allowed me to show the number of players on each team by performing a right join.

```
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

```
