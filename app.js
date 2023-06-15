let express = require('express');
let ejs = require('ejs');
let path = require('path');

/*let todosArr = [
  {id:1, contents: '영화보기', yesno: 'no'},
  {id:1, contents: '숙제하기', yesno: 'no'},
  {id:1, contents: '운동하기', yesno: 'no'},
  {id:1, contents: '파리 여행하기', yesno: 'no'},
];
let count = 5;*/

//실제 처음부터 빈배열에 넣기 위해서는 여기 실행
let todosArr = [];
let count = 1;
let app = express();
app.use(express.static('public')); //public폴더 공유
app.use(express.urlencoded({extended:false})); //사용자 html입력

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  console.log('시작됨');
  req.render('list', {datalist: todosArr});
});

app.get('/insert', (req, res) =>{
  console.log('insert 시작');
  res.render('insert');
});

app.post('/insert', (req, res) => {
  console.log("insert post시작됨");
  let id_num = count++;
  todosArr.push({id:id_num, contents:req.body.contents, yesno:req.body.yesno});
  res.redirect("/");
});

app.get('delete/:id', (req, res) => {
  let id_num = req.params.id;
  console.log("/delete"+req.params.id);
  for(const i in todosArr){
    if(todosArr[i].id == req.params.id){
      console.log(todosArr[i].id+" "+i);
      todosArr.splice(i, 1);
    }
  }
  console.log("delete ok!"+todosArr);
  res.redirect("/");
});