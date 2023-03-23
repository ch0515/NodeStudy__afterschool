const fs = require("fs");

fs.readFile("textfile.txt", (error, file) => {
  console.log(file);
  console.log(file.toString());
});
