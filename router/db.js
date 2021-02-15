let mysql = require('mysql');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '980928',
  database: 'planproject'
});

module.exports=db;