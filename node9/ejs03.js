//모듈 추출
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//서버를 생성하고 실행
http.createServer(function(require, response){
  //ejsPage.ejs 파일을 읽습니다
  // ejs페이지에 name. description 속성을 전달
  fs.readFile('ejsPage2.ejs', 'utf8', function(error, data){
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.end(ejs.render(data, {
      name: 'Node.js',
      description: 'Hello ejs With Node.js ...!'
    }));
  });
}).listen(3000, function(){
  console.log('Server Running at http://127.0.0.1:3000');
})