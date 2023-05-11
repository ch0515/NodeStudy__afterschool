var express = require('express');
var static = require('serve-static');

var app = express();

app.use(express.static(__dirname + '/public')); //루트로 public안의 파일 접근 가능
app.use(function (request, response){
  //응답합니다.
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<img src="/a.jpg" width="100%"/>');
});

//서버 실행

app.listen(3000, function(){
  console.log('Server running at http://127.0.0.1:3000');
})