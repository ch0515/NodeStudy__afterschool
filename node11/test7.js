//모듈을 추출합니다
var express = require('express');
var morgan = require('morgan');

//서버를 생성합니다
var app = express();

//미들웨어를 설정합니다
app.use(morgan(':method + :date'));
app.use(function(request, response) {
  response.send('<h1>express Basic</h1>');
});

//서버를 실행합니다
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});