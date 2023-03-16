console.time('duration_time');
var result = 0;
for(var i=0; i<10000; i++){
  result += i;
}
console.timeEnd('duration_time');

console.log('파일 이름 : %s', __filename);
console.log('파일이름 : %s', __dirname);