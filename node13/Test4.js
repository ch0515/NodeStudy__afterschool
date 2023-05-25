//세션을 저장하고, 출력하는 예
// request 객체의 session 속성을 출력
// 접속할 때마다 현재 시간을 now 세션에 저장

var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));

app.use(function (request, response){
  request.session.now = (new Date()).toUTCString();
  response.send(request.session);
});

app.listen(3000, function (){
  console.log(`Server running at http://127.0.0.1:3000`);
});