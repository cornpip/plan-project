let mysql = require('mysql');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '980928',
  database: 'planproject'
});

function hi(){
    db.query('SELECT * FROM users', function(err, result){
    let b=     `<div class="thing">
    <h2>hello</h2>
    <p>hi</p>
    </div>`;
    document.write(b);
})
};

hi();