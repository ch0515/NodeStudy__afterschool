//express-session 미들웨어 설정하고 서버를 생성하는 예
//모듈 추출
var express = require('express');
var session = require('express-session');

//서버를 생성
var app = express();

//미들웨어를 설정
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(function (request, esponse) {});

//서버를 실행합니다.
app.listen(3000, function (){
  console.log(`Server running at http://127.0.0.1:3000`);
});