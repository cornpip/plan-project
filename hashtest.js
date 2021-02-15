var bcrypt = require('bcryptjs');

var salt=bcrypt.genSaltSync(10);
var hash=bcrypt.hashSync('1111',salt);

console.log(hash);

var c =bcrypt.compareSync("1111", hash);

var d =bcrypt.compareSync('2222', hash);

console.log(c);
console.log(d);


var a=0;
if(!a){
    console.log('hi');
}