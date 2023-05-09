//모듈 추출
var express = require('express');

//서버를 생성
var app = express();

//라우터 설정
app.get('/a', function (request, response){
  response.send('<a href="/b">Go to B</a>');
  //response.sendFile(__dirname + '/public/a.html');
});
app.get('/b', function (request, response){
  response.send('<a href="/a">Go to A</a>');
});
app.all('*', function (request, response){
  response.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

//서버를 실행합니다.
app.listen(3000, function (){
  console.log("Server funning at http://127.0.0.1:3000");
})