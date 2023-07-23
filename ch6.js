/*논리연산자*/

// ||(OR) : 여러개 중 하나라도 true 면 true. 즉, 모든값이 false 일때만 false를 반환
//이름이 Tom 이거나, 성인이면 통과
const name1 = 'Mike';
const age1 = 30;

if(name1 === 'TOM' || age1 > 19){
    console.log('통과');
}

// && (AND) : 모든값이  true 면 true. 즉, 하나라도 false 면 false를 반환
//이름이 Miike 이거나, 성인이면 통과
const name2 = 'Mike';
const age2 = 18;

if(name2 === 'Mike' && age2 > 19){
    console.log('통과');
}else{
    console.log('탈락');
}

// ! (NOT) : true 면 true, false 면 true
//나이를 입력 받아 성인이 아니면 탈락
const age3 = prompt('나이를 입력해주세요.');
const isAdult = age3 > 19;

if(!isAdult){
    console.log('탈락!!!');
}else{
    console.log('통과');
}

console.log('--------------------------');

//비교연산자 우선순위 AND >> OR
//남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = 'F';
const name4 = 'Lisa';
const age4 = 30;

//if((gender === 'M' && name4 === 'Mike') || age4 > 19){
if(gender === 'M' && name4 === 'Mike' || age4 > 19){
    console.log('통과');
}else{
    console.log('탈락');
}

if(gender === 'M' && (name4 === 'Mike' || age4 > 19)){
    console.log('통과');
}else{
    console.log('탈락');
}