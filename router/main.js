const express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());


module.exports = function(app)
{
   app.get('/',function(req,res){
      console.log('----------------:',req.user);
      console.log(req.session);
      console.log(req.cookies);
      res.render('hoxy.html');
   });
}