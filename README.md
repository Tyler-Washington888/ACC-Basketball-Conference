# ACC-Basketball-Conference
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Server (Back End)](#server)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)

<br>

## Project Overview

**ACC-Basketball-Conference** 

<br>

## MVP

-

<br>

### Goals

- Full CRUD, REST API built with Node.js, Express, and MySQL.

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

### Server (Back End)

#### ERD Model

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1641006604/Meta-Minds/Screen_Shot_2021-12-31_at_10.09.24_PM_w2ppna.png)

<br>

***

## Post-MVP

- 

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
