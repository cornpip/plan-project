var http = require('http');
var url = require('url');
var form = require('./lib/form.js');
var wtf = require('./wtf.js');
var express = require('express');
var app1 = express();

let mysql = require('mysql');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '980928',
  database: 'planproject'
});

app1.use('/static', express.static(__dirname + '/first'));


var app = http.createServer(function(request, response){
    app1.use('/static', express.static(__dirname + '/first'));
    console.log("-------------------");
    db.query('SELECT * FROM plan', function(err, plan){
        if(err){
            throw err;
        }
        else if(plan.title === undefined){
            console.log('test');
            response.writeHead(200);
            response.write(form.default());
            response.end();
        }
        else{
            console.log('wtf');
            console.log(plan.title);
            response.writeHead(404);
            response.end('not found');
        }
    });
});

app.listen(3000);