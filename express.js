var express = require('express');
var app = express();
// var router = require('./router/main.js')(app);
var bodyparser = require('body-parser');
// bodyparser 모듈 안써도 express. urlencoded, json 가능하다
const db = require('./router/db.js');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');

var cookieparser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

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
                return done(null, false, {message: '이메일이 일치하지 않습니다.'})
            }
            //입력값고 일치하는 회원정보가 있을경우
            else if(result.length){
                console.log('이메일 통과');0
                console.log(result);
                // JSON.stringify =자바스크립트를 JSON 문자열로 변환
                // JSON.parse = JSON문자열을 json 객체로 변환시켜줌 
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
                        return done(null, false, {message: '비밀번호가 일치하지 않습니다.'})
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

app.use(flash());

app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');//이거 없어도 돌아가네
app.engine('html', require('ejs').renderFile); //view engine을 ejs말고 html로 받아달라는코드인 것 같다.

app.get('/',function(req,res){
    console.log('----------------:',req.user);
    console.log(req.session);
    let fmsg = req.flash();
    //와.... flash가 휘발성이라 console로 찍으면 바로날라가는거였네;;
    //console찍기전에 변수에 담아두자
    console.log('======================',fmsg);
    let success= req.session.sign
    req.session.sign = null;
    res.render('homepage',
    {data: req.user, data2: fmsg.error, data3: success});
 });
 //기본페이지에서 req.session, user, cookies 다 안잡힌건 모듈을 main.js쪽에
 //안설치해서 그랬다 라우터로 따로 빼놓으려면 모듈도 다 옮겨두자
 //실행은 import로 부터가져와서 하는게 아니라 그곳에서 하는듯하다

app.post('/login_process', passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/',
    failureFlash:true
}));
//로그인 라우트

app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
});

app.get("/form", function(req, res){
    //deserialize의 userinfo는 라우터의 req.user 로 넘어온다.

    console.log(req.session);
    console.log('qweewqeqweqwqew',req.user);
    if(!req.user){
        res.send('로그인 필요');
        return false;
    }
    db.query('SELECT * FROM plan', function(err, result){
        db.query(`SELECT date_format(firsttime,'%y-%m-%d:%l%p'),
        date_format(lasttime,'%y-%m-%d:%l%p') FROM plan`, function(err, result2){
            console.log('2222222222222222222', result2[3]["date_format(lasttime,'%y-%m-%d:%l%p')"]);
            res.render('form(dok)',
            {data: result, seetime:result2});
        })
    })
})

app.post("/form_process", function(req, res){
    let body= req.body;
    console.log('515151515',body.title);
    console.log(body.detail);
    if(body.title == ''){
        res.redirect('/form');
    }
    else if(body.detail == ''){
        res.redirect('/form');
    }
    else{
        db.query(`INSERT INTO plan(title, description, nick) 
        VALUES('${body.title}','${body.detail}','${req.user.nick}')`);
        res.redirect('/form');
    }
})

app.post("/delete", function(req, res){
    let body = req.body;
    console.log("delete=========",body);
    let sql = `DELETE FROM plan WHERE title=?`
    db.query(sql, [body.dtitle])
    res.redirect('/form');
})

app.post('/update', function(req,res){
    let body = req.body;
    console.log('---update:', body);
    db.query('SELECT * FROM plan', function(err, result){
        db.query(`SELECT date_format(firsttime,'%y-%m-%d:%l%p'),
        date_format(lasttime,'%y-%m-%d:%l%p') FROM plan`, function(err, result2){
            res.render('update',
            {data: result, 
            uptitle: body.uptitle,
            updesc: body.updesc,
            identifier: body.id,
            seetime: result2 })
        });
    });
});

app.post('/update_process', function(req,res){
    let body = req.body;
    console.log(body);
    // let sql = `UPDATE plan SET title=? WHERE title=?`
    // let sql2 = `UPDATE plan SET description=? WHERE title=?`
    // let sql3 = `UPDATE plan SET lasttime=now() WHERE title=?`
    // 하나하나 넣을 필요없다

    let sqlok =`UPDATE plan SET lasttime=now(), description=?, title=? WHERE id=?`

    // let sql = `UPDATE plan 
    // SET lasttime=now(), 
    // description=CASE id WHEN ? THEN ? ELSE description END
    // , title=CASE id WHEN ? THEN ? ELSE title END WHERE id IN(?)`
    // CASE WHEN THEN ELSE
    // mysql의 조건문이다 (참고)

    ///db.query(sql, [body.id, body.updetail, body.id, body.uptitle2, body.id]);
    db.query(sqlok,[body.updetail, body.uptitle2, body.id]);
    res.redirect('/form');

    // !!제목 중복으로 수정하면 다음수정부터 같이 바뀌네!! id끌고와서 where로해결
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
    req.session.sign= true;
    res.redirect('/');
})

// app.get("/direct_login", function(req,res){
//     res.render('hoxycopy2',{data: req.user, data2: '', data3:req.session.sign_id});
// });
// 모르겠다 회원가입 후 바로 로그인되있도록 어떻게할까


app.get('/maketeam', function(req,res){
    res.render('maketeam');
})

app.post('/reqteam', function(req,res){
    var body=req.body
    db.query(`INSERT INTO teamplan(teamname, teampass) 
    VALUES('${body.teamname}','${body.teampass}')`);
    console.log(body);
    res.redirect('/');
})

var server = app.listen(3000, function () {
    console.log("Express server has started on port 3000");
});
