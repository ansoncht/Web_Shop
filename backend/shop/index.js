const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

const app = express()

const port = process.env.PORT || 8888;

// Models
const user = require("./routes/user")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type");
  next();
});

// MongoDB
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connection Success"))
    .catch(() => {
        console.log("Database Connection Failed");
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

app.use('/user', user);

/* MSSQL
const config = {
  user: 'superman',
  password: 'iamon99$',
  server: 'on99shop.database.windows.net',
  database: 'Shop',
  "options": {
    "encrypt": true,
    "enableArithAbort": true
  }
};

sql.on('error', err => {
  console.log("Error Occurred");
})


sql.connect(config).then(db => {
  if (!db) {
    console.log("Cannot Connect to Database!");
    process.exit();
  } else {
    console.log("Connect to Database");
    const request = db.request();
    request.query("SELECT * FROM Users WHERE First_Name='123'", (err, record) => {
      if (err) {
        console.log(err);
      } else if (!record.recordset.length) {
        console.log("No Result!");
      } else {
        console.log(record);
      }
    });
  }
}).catch(err => {
  console.log(err);
}) */
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})