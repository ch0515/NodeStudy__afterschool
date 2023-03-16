//JSON이란?
//자바스크립트에서 오브젝트를 표현하는 방법
//{키:값}으로 표현
const user = {};
user.name = 'kyeongrok';
user.age = 31;

console.log(user);

const user2 = {name: 'kyeongrok', age: 31};
console.log(user2);

const user = {name: 'kim', age:31};
console.log('user :', user);
console.log('user.name:', user.name);
console.log('user.age:', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);
