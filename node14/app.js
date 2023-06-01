const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'chaemin',
  password: '1005',
  database: 'mydb'
});

connection.connect(function(err){
  if(err){
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }else{
    console.log("연결 완료!!");
  }
})