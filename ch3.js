/*
형변환
형변환이 필요한 이유 : 자료형이 다른 변수들이 합쳐질 경우 의도치 않은 자료형으로 출력될 수 있음
*/

const mathScore = prompt('수학 점수는 몇점 입니까?');   //prompt()는 문자형
const engScore = prompt('영어 점수는 몇점 입니까?');    
const result = (mathScore + engScore) / 2;            //숫자가 아닌 문자 + 문자이며, 나누기 같은 표현식은 숫자형이 아니더라도 자동형 변환이 되어 실행 됨

console.log(result); //원인을 찾기 힘든 에러를 발생 할 수 있으므로 항상 의도적으로 원하는 타입으로 변환 해주어야됨 => 명시저 형변환

/*
String() 문자형으로 변환
*/
console.log(
    String(3),          //숫자->문자형으로 변환
    String(true),       //true->문자형으로 변환
    String(false),      //false->문자형으로 변환
    String(null),       //null->문자형으로 변환
    String(undefined)  //undfined->문자형으로 변환
);

/*
Number() 숫자형으로 변환
사용자로 입력 받은 값이 문자형인 경우 자주 사용
*/
console.log( 
    Number("1234"),     //문자->숫자형으로 변환
    Number("1234abc"),  //숫자가 아닌 문자가 포함 될 경우 NaN
    Number(true),       //1  
    Number(false),      //0
    Number(null),       //0
    Number(undefined),   //NaN             
);

/*
Boolean() 불린형을로 변환
false case : 0, 공백, null, undefind, NaN 이외에는 ture
*/
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),

    Boolean(0),          //false
    Boolean('0'),        //true
    
    Boolean(''),         //false
    Boolean(' ')         //ture
);



