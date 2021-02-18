var express = require('express');
var app = express();
var router = require('./router/main.js')(app);
var bodyparser = require('body-parser');
// bodyparser 모듈 안써도 express. urlencoded, json 가능하다
const db = require('./router/db.js');
var bcrypt = require('bcryptjs');

var cookieparser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
const { request } = require('express');

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

app.use(cookieparser('keyboard cat'));
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
    // serialize의 user인자는 localstrategy쪽의 userinfo가 넘어오는 것
    console.log('serializeuser:', user);
    done(null, user.number);//여기에 식별자가 desirialize쪽 id인자로 전해짐
});
passport.deserializeUser(function(id,done){
    console.log('deserializeuser:', id);
    let sql = 'SELECT * FROM users WHERE number=?';
    db.query(sql,[id], function(err, result){
        if(err){
            throw err;
        }
        else{
            let json = JSON.stringify(result[0]);
            let userinfo = JSON.parse(json);
            done(null, userinfo);
        }
    })
});

passport.use(new LocalStrategy(
    {
    usernameField: 'user_id',
    passwordField: 'user_password'
    },
    function(username, password, done){
        console.log(username);
        console.log(password);
        let sql= 'SELECT * FROM users WHERE user_id=?';
        db.query(sql, [username], function(err, result){
            if(err){
                throw err;
            }
            //입력값과 일치하는 회원정보가 없을 경우
            else if(!result.length){
                console.log('이메일을 다시입력해주세요.');
                return done(null, false, {message: 'incorrect'})
            }
            //입력값고 일치하는 회원정보가 있을경우
            else if(result.length){
                console.log('이메일 통과');0
                console.log(result);
                // JSON.stringify =코드에서 json 객체만을 string 객체로 변환시켜주는 듯(배열은 그대로)
                // JSON.parse = string 객체를 json 객체로 변환시켜줌 
                let json = JSON.stringify(result[0]);
                let userinfo = JSON.parse(json);
                // 확인하고 싶으면 console.log
                let hash = userinfo.user_password
                bcrypt.compare(password, hash, function(err, result1){
                    if(result1){
                        console.log('비밀번호 통과')
                        return done(null, userinfo);
                        // 이게 굳이 RowDataPacket을 떼려고 userinfo로 써야하나 싶다
                        // result[0]로 전송하면 RowDataPacket그대로 serialize쪽으로
                        // 가지만 RowDataPacket있어도 객체 속성접근은 똑같이 가능하다.
                        // 일단 참고해두자
                    }
                    else{
                        console.log('비밀번호 실패')
                        return done(null, false, {message: 'incorrect'})
                    }
                });
            }   
    })
}
));
// app.use(session({
//     secret: 'key',
//     resave: false,
//     //수정없으면 세션저장소에 값을 저장하지않는다?
//     saveUninitialized: true,
//     //세션이 실행되기전까지는 실행시키지않는다
//     test: false
// }))
// 이거 안써도 session 뜨는데?

app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');//이거 없어도 돌아가네
app.engine('html', require('ejs').renderFile); //view engine을 ejs말고 html로 받아달라는코드인 것 같다.

app.post('/login_process', passport.authenticate('local',{
    successRedirect:'/form',
    failureRedirect:'/'
}))
//로그인 라우트



app.get("/form", function(req, res){
    //deserialize의 userinfo는 라우터의 req.user 로 넘어온다.
    // if(!req.user){
    //     res.send('404');
    //     return false;
    // }
    console.log(req.session);
    db.query('SELECT * FROM plan', function(err, result){
        res.render('hoxy2copy',{data: result});
    })
})

app.post("/form_process", function(req, res){
    let body= req.body;
    console.log(body.title);
    console.log(body.detail);
    if(body.title == ''){
        res.redirect('/form');
    }
    else if(body.detail == ''){
        res.redirect('/form');
    }
    else{
        db.query(`INSERT INTO plan(title, description) VALUES('${body.title}','${body.detail}')`)
        res.redirect('/form');
    }
})

app.get("/signup", function (req, res) {
    res.render('signup.html');
});

app.post("/signup_process", function(req,res){
    let body=req.body;
    let salt=bcrypt.genSaltSync(10);
    console.log(body.user_id);
    let hash_pass=bcrypt.hashSync(body.user_password ,salt);
    let nick=body.nick;
    console.log(hash_pass);
    db.query(`INSERT INTO users(user_id, user_password, nick) VALUES('${body.user_id}','${hash_pass}','${nick}')`);
    res.send('회원가입완료');
})

var server = app.listen(3000, function () {
    console.log("Express server has started on port 3000");
});
