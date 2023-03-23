const fs = require("fs");

fs.writeFile("output2.txt", "안녕하세요..!", (error) => {
  console.log("파일 쓰기 완료!");
});
