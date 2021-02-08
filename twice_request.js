var http = require('http');
var url = require('url');
var form = require('./lib/form.js');

let mysql = require('mysql');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '980928',
  database: 'planproject'
});
let i= 1;


var app = http.createServer(function(request, response){
    console.log('hi');
    console.log(request.url);
    db.query('SELECT * FROM plan', function(err, plan){
        if(err){
            throw err;
        }
        console.log(i);
        i++;
    });
    response.writeHead(200);
    response.end(form.normal());
});

app.listen(3000);
