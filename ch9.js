/*함수
한번에 한 작업에 집중
읽기 쉽고 어떤 동작을 하는 함수인지 함수 선언*/

//매개변수가 없는 함수
function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.')
}

showError(); //함수 호춭

//매개변수가 있는 함수
function sayHolle(name){
    const msg = `Hello, ${name}`; //const:변하지 않는 변수 선언, ${}: 함수내 매개변수 사용
    console.log(msg);
}

sayHolle('지은'); //함수 호출
sayHolle('뭉치');
sayHolle('가을');


function sayHolle2(name){
    let msg = 'Hello,'; //지역변수 : 함수 내에서만 사용이 가능함
    if (name){
        msg = msg + `${name}`;
    }
    console.log(msg);
} 
sayHolle2();

//함수 내에 선언된 변수들은 해당 함수 안에서만 사용이 가능하다

//함수 밖에서 사용하고 싶으면 변수를 함수 밖으로 빼줘야 됨

let msg = 'Hello,'; //전역변수: 어디서나 접근이 가능

function sayHolle3(name){

    if (name){
        msg = msg + `${name}`;
    }
    console.log(msg);
} 
sayHolle3('함수 밖에 선언');



//전역변수와 지역변수
//전역변수와 지역변수는 변수명이 같아도 서로 간섭을 받지 않는다.

let message = "welcome"; //전역변수
console.log(message);

function sayHolle4(name){
    let message = 'hello'; //지역변수
    console.log(message + name);
}

sayHolle4('지승');
console.log(message);

//OR
function sayHolle5(name){
    let newName = name || 'friend';
    let message = `hello, ${newName}` //지역변수
    console.log(message);
}
sayHolle5();
sayHolle5('짜은');

//default value
function sayHolle6(name = 'frined'){
    let message = `hello, ${name}` //지역변수
    console.log(message);
}
sayHolle6();
sayHolle6('6');

//return 으로 값 반환
function add(num1, num2){
    return num1 + num2;
}
const result = add(2, 3);
console.log(result);

function showError2(){
    alert('에러 발생');
    return;
    alert('이 코드는 절대 실행 되지 않습니다.');
}
const result2 = showError2();
console.log(result2);