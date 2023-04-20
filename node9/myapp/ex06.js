//모듈 추출
var express = require('express');

//서버 생성
var app = express();

//미들웨어 설정
app.use(function(request, response, next){
  //응답
  //상태코드만 전달할때는 response.sendStatus(404) 사용
  response.status(404).send('<h1>ERROR</h1>');
});

app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
})