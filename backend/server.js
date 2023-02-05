const express = require('express')
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


const app = express();

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/teams', require('./routes/teamRoutes'));
app.use('/players', require('./routes/playerRoutes'));


app.listen('3000' , () => {
    console.log('Server started on port 3000'.yellow.underline)
})