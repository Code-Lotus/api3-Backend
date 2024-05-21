
var mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'DASHBOARD'
})

con.connect(function(err:Error) {
    if (err) throw err;
    console.log("Connected!");
  });