var fs = require("fs");
var http = require("http");

//서버를 생성하고 실행
http
  .createServer(function (require, response) {
    //HTML 파일을 읽습니다.
    fs.readFile("HTMLPage.html", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  })
  .listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
  });
