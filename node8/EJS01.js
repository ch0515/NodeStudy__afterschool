const http = require("http");
const fs = require("fs");
const ejs = require("els");

//서버 생성 및 실행
http
  .createServer(function (require, response) {
    //EJSPage.ejs파일 읽기
    fs.readFile("ejsPage.ejs", "utf8", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(ejsrender(data));
    });
  })
  .listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
  });
//EJS 파일은 기존 HTML에서 추가적으로 두 개의 특수 태그를 가집니다.

// EJS 특수 태그
// 1. <%코드%>
// '<%%>'사이에 값을 작성하면 HTML페이지에서 해당 데이터를 입력할 수 있습니다. 변수뿐만 아니라, 25*30과 같은 연살 결과도 출력이 가능합니다.
//'<%%>'를 통해 js코드와 같이 변수를 선언하고 있고, '<%=%>'를 통해 변수의 값을 출력
