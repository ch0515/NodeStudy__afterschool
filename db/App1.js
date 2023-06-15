const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'chaemin',
  password : '1005',
  database : 'mydb'
});


// testtable 출력
// connection.connect(function (err) {
//   if (err) {
//       console.error('mysql connection error');
//       console.error(err);
//       throw err;
//   } else {
//       console.log('TESTTABLE 테이블 연결 성공!');
//       var sql2 = "insert into testtable values(?, ?)";
//       var input_data1 = [3, "park"];
//       connection.query(sql2, input_data1, function(err){
//         console.log("삽입완료1");
//       })
//       var sql1 = "select no, str_name from testtable";
//       connection.query(sql1, function (err, rows) {
//           for (var obj of rows) {
//               console.log("no : ", obj.no);
//               console.log("str_name : ", obj.str_name);
//           }
//       });
//       connection.end();
//   }
// });

//sql 삭제하기
var sql3 = "delete from testtable whrer no = ?";
var delete_data = [5];
connection.query(sql3, delete_data, function(error){
  console.log("수정완료");
});

var sql = "update TestTable set str_name=? where no=?";
var update_date = ["김길동", 1];
connection.query(sql, update_date, function(error){
  console.log('수정 완료');
});

var sql1 = "select no, str_name from testtable";
connection.query(sql, function(err, rows){
  for(var obj of rows){
    console.log("no : ", obj.no);
    console.log("str_name : ", obj.str_name);
  }
})