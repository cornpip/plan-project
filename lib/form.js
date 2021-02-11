var moment = require('moment');
var time = moment().format("YYYY.MM.DD  ");
var time2 = "";
var standard = moment().format("HH");
if(standard >= 12){
    time2 = "P.M. "+(standard-12);
}else{
    time2 = "A.M. "+standard;
}
console.log(time2);

var shit= `<link href="../first/buttonstyle.css" rel="stylesheet" type="text/css"/>`;

module.exports={
    normal:function(){
        return `
        <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }
        .container {
            display: grid;
            grid-template-columns: 100px repeat(4, 1fr) 100px;
            grid-template-rows: 50px 150px repeat(5, minmax(180px, auto));
            gap: 15px 15px;
        }
        subhead{
            grid-column:1/7;
            grid-row: 1/1;
            height:50px;
            background-color:#202d4e;
            box-shadow:0 3px 7px 0 rgb(0 0 0 / 25%);
            color:rgb;
            position: relative;
        }
        .time{
            color:rgba(255, 255, 255, 0.904);
            text-align:center;
            margin: 7px;
            font-weight: 400;
        }
        header {
            grid-column: 2/6;
            grid-row:2/2

        }
        .blank { 
            grid-column:1/1;
            grid-row: 1/7;
            border-right:2px groove rgba(179, 2, 2, 0.2);
            margin-right:60px
        }
        .blank2{
            grid-column:6/6;
            grid-row: 1/7;
            border-left:2px groove rgba(179, 2, 2, 0.2);
            margin-left:60px
        }
        main{
            box-shadow:2px 3px 4px 0 rgb(0 0 0 / 20%);
            border-radius:10px 100px / 120px;
            border:2px solid burlywood;  
        }
        .left{
            grid-column:1/1;
            grid-row: 3/4;
            writing-mode: vertical-rl;
            /* vertical-lr 
            transform: rotate(180deg);
            text-align: center;*/
            background-color: white;
            height:120px;
        }
        .left2{
            grid-column:6/6;
            grid-row: 5/6;
            writing-mode: vertical-rl;
            background-color: white;
            padding-top:10px;
            height:120px;
        }
        .item-1{
            font-size:16pt;
            line-height: 7px;
            padding-left: 7px;
            margin:5px;
            /* vertical-align:top; block요소에서 적용 안됨*/
        }

    </style>
    <link href="../first/buttonstyle.css" rel="stylesheet" type="text/css"/>
    <script defer src="./clock2.js"></script>
</head>
<body>
    <div class="container">
        <subhead>
            <h2 class="time">Time loading</h2>
        </subhead>
        <header>
            <input type="text">
        </header>
        <main>
            <h2 class="item-1">now</h2>
        </main>
        <main class="item-2"></main>
        <main class="item-3"></main>
        <main class="item-4"></main>
        <main class="item-5"></main>
        <main class="item-6"></main>
        <main class="item-7"></main>
        <main class="item-8"></main>
        <main class="item-9"></main>
        <main class="item-10"></main>
        <main class="item-11"></main>
        <main class="item-12"></main>
        <main class="item-13"></main>
        <main class="item-13"></main>
        <main class="item-13"></main>
        <main class="item-13"></main>
        <aside class="blank"></aside>
        <h2 class="left">test one <br> two</h2>
        <aside class="blank2"></aside>
        <h2 class="left2">test one <br> two</h2>
    </div1>
</body>
</html>`;
    }

    ,default: function(){
        return `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }
        .container2{
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr;
            min-width: 850px;
        }
        .flex{
            display: flex;
            justify-content: center;
        }
        .container {
            display: grid;
            display: -ms-grid;
            -ms-grid-columns: 100px repeat(4, 1fr) 100px;
            -ms-grid-rows:150px repeat(5, minmax(180px, auto));
            grid-template-columns: repeat(4, 200px);
            grid-template-rows: minmax(180px, auto) repeat(4, minmax(180px, auto));
            gap: 15px 15px;
        }
        subhead{
            grid-row: 1/1;
            height:50px;
            background-color:#202d4e;
            box-shadow:0 3px 7px 0 rgb(0 0 0 / 25%);
            color:rgb;
            position: relative;
        }
        .time{
            color:rgba(255, 255, 255, 0.904);
            text-align:center;
            margin: 7px;
            font-weight: 400;
        }
        header {
            grid-column: 1/5;
            grid-row:1/1;

        }
        .blank { 
            grid-row:2/7;
            grid-column:1/1;
            border-left:2px groove rgba(179, 2, 2, 0.2);
            display: flex;
            align-items:center;
        }
        .blank2{
            grid-column: 4/4;
            grid-row: 1/7;
            border-right:2px groove rgba(179, 2, 2, 0.2);
            display:flex;
            align-items:center;
            justify-content: flex-end;
        }
        default{
            box-shadow:2px 3px 4px 0 rgb(0 0 0 / 20%);
            border-radius:10px 100px / 120px;
            border:2px solid burlywood;
            grid-column: 2/4;
            grid-row: 2/4;
            display:flex;
            justify-content:center;
            align-items: center;
        }
        .left{
            margin:0;
            writing-mode: vertical-rl;
            /* vertical-lr 
            transform: rotate(180deg);
            text-align: center;*/
            background-color: white;
            height:auto;
        }
        .left2{
            writing-mode: vertical-rl;
            background-color: white;
            height:auto;
            margin:0;
        }
        .item-1{
            font-size:16pt;
            line-height: 7px;
            padding-left: 7px;
            margin:5px;
            /* vertical-align:top; block요소에서 적용 안됨*/
        }
        input[type="text"]{
            line-height: normal;
            padding: .8em .5em;
            width: 79%;
            border:0.2em solid burlywood;
        }

        textarea{
            padding: .6em .5em;
            width:80%;
            resize:vertical;
            border:0.2em solid burlywood;
        }
        .detail{
            display:flex;
            flex-direction: row;
            align-items: center;
            gap:0.3em;
        }
    </style>
    ${shit}
</head>
<body>
    <div class="container2">
        <subhead>
            <h2 class="time">when login ${time}${time2}시</h2>
        </subhead>
    </div>
    <div class="flex">
        <div class="container">
            <header>
                <form>
                    <p>Title >>> 
                        <input type="text" name="Title" placeholder="계획의 큰 주제를 입력하세요">
                    </p>
                    <p class="detail">
                        <tb>Detail >></tb>
                        <textarea name="" id="" rows="5"
                        placeholder="구체적으로 계획을 입력하세요"></textarea>
                    </p>
                    <div class="wrapper">
                        <button type="submit" class="">
                            <span>Submit</span>
                            <div class="success">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 29.756 29.756" style="enable-background:new 0 0 29.756 29.756;" xml:space="preserve">
                                    
                                <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </header>
            <default>
              <set>계획을 추가해주세요.</set>
            </default>
            <aside class="blank">
                <h2 class="left"></h2>
            </aside>
            <aside class="blank2">
                <h2 class="left2"></h2>
            </aside>
        </div>
    </div>
</body>
</html>
        `
    }
}