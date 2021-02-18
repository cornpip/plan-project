const { request } = require("express");

module.exports = function(app)
{
   app.get('/',function(req,res){
      console.log('----------------:',req.user);
      console.log(req.session);
      res.render('hoxy.html');
   });
}