const mysql = require('mysql')

// create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'acc_bball_conference'
}) 


module.exports = db

