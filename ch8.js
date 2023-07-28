/*switch 
case가 간결할 경우 보다 간단하게 쓸수있는 장점이 있음
*/

//사고 싶은 과일을 물어보고 가격 알려주기

let fruit = prompt('무슨 과일을 사고 싶나요?'); //let: 변수선언,변하는값  prompt:값을 입력 받을때 사용

switch(fruit){
    case '사과' :
        console.log('100원 입니다');
        break;  //break가 없으면 이후의 모든 case문이 실행됨
    case '바나나' :
        console.log('200원 입니다');
        break;
    case '키위' :
        console.log('300원 입니다');
        break;
    case '멜론' :
    case '수박' :
        console.log('500원 입니다');
        break;
    default :
        console.log('과일명을 잘못 입력하셨습니다.');
}