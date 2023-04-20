//모듈 추출
var express = require('express');

//서버를 생성
var app = express();

//request 이벤트 리스너 생성
app.use(function (request, response){
  //데이터 생성
  var output = [];
  for(var i=0; i < 3; i++){
    output.push({
      count: 1,
      name: 'name - ' +i
    });
  }

  //자바스크립트 객체를 입력했으므로 JSON형식으로 출력
  response.send(output);
});

//서버 실행
app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
})