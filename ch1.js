//변수 선언 -> 변하지 않는 값 : const /  변하는 값 : let
const name = 'Mike'; 
const age = 30;

const name1 = 'Mike';
const name2 = 'Mike';
const name3 = 'Make';

const message = "I'm a boy";
const message2 = 'I\'m a boy';
const message3 = `My name is ${name}`;  //일반따움표를 사용하면 변수명이 그대로 노출되니 주의!

const PI  = 3.14;

console.log(1 + 2);
console.log(10 - 3);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);

//Boolean
const a = true;
const b = false;

console.log(name == 'Mike');
console.log(age > 40);

//null  과  undefind 
let  user = null; //객체형 , 심불형

//typeof 연산자 
//다른 개발자가 작성한 타입을 알아야 하거나, api통신 등을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리해야 될때 주로 사용  
console.log(typeof 3);          //number                                
console.log(typeof name);       //string
console.log(typeof true);       //boolean
console.log(typeof "xxx");      //string    
console.log(typeof null);       //object
console.log(typeof undefined);  //undefind

const x = '나는 ';
const y = ' 입니다.';

console.log(x + name + y); //문자형과 문자형이 더해지면 하나의 문자로 합쳐짐
console.log(x + age + '살' +y); //숫자형과 문자형이 더해지면 문자형으로 변환됨 




