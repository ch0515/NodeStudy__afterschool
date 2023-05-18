//body parser 미들웨어
//static미들웨어를 통해 로그인 처리를 하는 login.html파일을 읽어오고
/*body-parser미드루에러를 사용해 POST방식으로 요청된 결과값을 출력
GET(query), POST(body) 방식 모두 처리 가능 - 각 방식을 구분하여 변수에 값을 대입
 */

const express = require("express")
const bodyParser = require('body-parser');

//express 객체 생성
const app = express();
/* application/x=www-form-urlencoded 파싱
urlencoded는 url 형식의 데이터전달을 의미
extended: flase -> NodeJs에 기본으로 내장된 querystring모듈 사용
extended: true -> qs모듈 사용.(querystring보다 확장된 기능, 중첩객체 파싱 가능)
urlencoded 형태인 'age=20&name=홍길동&hobby=캠핑' 로 로 값을 전달하면,
{'age':20, 'name': '홍길동', '}
 */
app.use(bodyParser.urlencoded({extended: flase}));

//json 형식의 텍스트를 자바스크립트 객체로 파싱
//json은 JSON 형태의 데이터 전달을 의미
//{'age':20, 'name':'홍길동', 'hobby':'캠핑'}
// ----> json 형태로 값을 전달하면 그대로 request의 body에 값이 추가


app.use(bodyParser.json());

//app.use(express.static(`${__dirname}/login`));
app.use(express.static(__dirname + '/login'));

app.use((request, response) => {
  const userId = request.body.userid || request.query.userid;
  const userPassword = request.body.password || request.query.password;

  response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8'});
  response.write('<h1>login ID와 pw결과 값 입니다.</h1>');
  response.write(`<div><p>${useId}</p></div>`);
  response.write(`<div><p>${userPassword}</p></div>`);
  response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
  console.log('3000포트에서 서버 시작');//
});