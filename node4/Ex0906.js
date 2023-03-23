const url = require("url");

const parseObject = url.parse(
  "http://www.hanbit.co.kr/store/books/look.php?p_code=84250257160"
);
console.log(parseObject);
