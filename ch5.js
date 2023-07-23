/*비교 연산자*/
console.log(10 > 5);    //true
console.log(10 == 5);   //false
console.log(10 != 5);   //true

//동등연산자 
const a = 1;
const b = '1';
console.log(a == b);    //true
console.log(a === b);   //false(일치연산자:type 까지 비교)

/*조건문*/
//if문 ()안의 조건이 true면 실행
//else문 if문의 조건이 false일때 실행

const age1 =  19;

if(age1 > 19){
    console.log('환영합니다.');
}

if(age1 <= 19){
    console.log('안녕히가세요');
}

console.log('---------------------');

if(age1 > 19){
    console.log('환영합니다.2');
}else{
    console.log('안녕히가세요2');
}

//추가요구사항 : 19살이면 수능 잘 치세요 문구 출력
if(age1 > 19){
    console.log('환영합니다3');
}else if(age1 === 19){
    console.log('수능 잘 치세요');
}else{
    console.log('안녕히가세요3')
}