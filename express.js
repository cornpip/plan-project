var express = require('express');
var app = express();
var router = require('./router/main.js')(app);
var bodyparser = require('body-parser');
// bodyparser 모듈 안써도 express. urlencoded, json 가능하다

app.use(express.static('./public'));

app.use(express.urlencoded({
    extended: true
})); //url 모듈썼을때 body에 이벤트를 더해주고 저장하는 그역할의 코드 인듯
    //extended는 중첩된 객체표현 허용 여부로
    // true면 qs모듈
    // false면 query-string모듈 사용한데
    //이건 post전에 use안하면 안되더라

app.use(express.json());
    //body를 json으로 파싱
    //얘는 post후에 use해도 되네

app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');//이거 없어도 돌아가네
app.engine('html', require('ejs').renderFile); //view engine을 ejs말고 html로 받아달라는코드인 것 같다.


app.post("/form", function (req, res) {
    console.log(req.body);
    res.render('hoxy2.html');
});

app.get("/signup", function (req, res) {
    res.render('signup.html');
});

var server = app.listen(3000, function () {
    console.log("Express server has started on port 3000");
});
