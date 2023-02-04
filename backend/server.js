const express = require('express')
const app = express()
const db = require("./config/db");
const colors = require('colors')

// connect to mysql server
db.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log(`MySQL Connected...`.blue.underline)
});

 
app.listen('3000' , () => {
    console.log('Server started on port 3000'.yellow.underline)
})