const express = require('express')
const app = express()
const db = require("./config/db");

// connect to mysql server
db.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('MySQL Connected');
});
 
app.listen('3000' , () => {
    console.log('server started on port 3000')
})