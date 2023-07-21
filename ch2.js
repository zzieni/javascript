/*대화상자
단점 : 창이 떠 있는 동안 스크립트 일시정지되어 동작에 제한을 받음, 스타일링 불가(위치/모양 설정 불가, 브라우저마다 모양이 다름)
장점: 빠르고 간단하게 적용 가능
*/


/*
1. prompt
입력 받을 수 있는 필드를 제공
사용자에게 어떤 값을 입력받을때 주로 사용
취소 : null
*/
// const name4 = prompt("이름을 입력하세요.");
const name4 = prompt("이름을 입력하세요.", "ex)홍길동"); //두번째 인수 넣어주면 디폴트 값 추가


/* 
2. alert
알려줌
메세지를 띄우고 사용자가 확인버튼을 누르기 전 까지 계속 띄우고 있음
일방적으로 알리는 용도
비밀번호 틀림 알리기 필수값 입력 등에 자주사용됨
*/
// alert("환영합니다. " + name4 + "님");
alert(`환영합니다. ${name4}님`);

/* 
3. confirm 
확인 받음
*/
const isAdult = confirm ("당신은 성인 입니까?"); // 확인:true 취소:false
console.log(isAdult); //사용자 액션을 한번 더 확인

