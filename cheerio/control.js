const request = require('request-promise');
const cheerio = require('cheerio');
const v = require('voca')
var a = require('./practice.html');


request('http://localhost:3000/').then(function (html) {

    // Cheerio 오브젝트 생성
    const $ = cheerio.load(html)

    console.log($.html());
});