const { captureRejectionSymbol } = require("events");
let http = require("http");

let server = http.createServer();

// 웹서버 시작해서 3000번 포트에서 대기
let port = 3000;
server.listen(port, function () {
  console.log("웹 서버 시작 : %d", port);
});

// 클라이언트로 연결 이벤트 처리
server.on("connection", function (socket) {
  console.log(
    "클라이언트 접속 : %s, %d",
    socket.remoteAddress,
    socket.remotePort
  );
});

// 클라이언트 요청 이벤트 처리
server.on("request", function (req, res) {
  console.log("클라이언트 요청");
  console.dir(res);
});

// 서버 종료 이벤트 처리
server.on("close", function () {
  console.log("서버 종료");
});
