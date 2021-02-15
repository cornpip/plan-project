let db = require('./db.js');


var a= db.query('SELECT * FROM users', function(err, result){
    let c = result.length-1;
    for(var i=0; i<=c; i++){
        console.log(result[i].user_id);
    };
    console.log(result.length);
    console.log(result[0].user_id);
    console.log(result[0].user_password);
});
