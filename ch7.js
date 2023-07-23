/*반복문*/

//fof문, 가장 많이 사용
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log('for vvvvvvvvvvvvvvvvv')

for (let i = 0; i < 10; i++){
    console.log(i+1);
}

console.log('-----------------')

for (let i = 1; i < 11; i++){
    console.log(i);
}


console.log('-----------------')

for (let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('while vvvvvvvvvvvvvvvvv')

//while문, 무한 반복의 단점이 있음
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

console.log('do while문 vvvvvvvvvvvvvvvvv')

//do while문, while문과 비슷하나 조건을 아래로 옮길수 있며 최소 한번은 실행됨
let j = 0;
do{
    console.log(j);
    j++;
}while(j<10)

/*반복문 빠져나오기*/
//break : 만나는 순간 즉시 코드 실행을 멈추고 해당 반복문을 빠져나옴
while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}

console.log('continue vvvvvvvvvvvvvvvvv')

//continue : 만나는 순간 즉시 코드 실행을 멈추지만 반복문을 빠져 나오지 않고 다음 반복으로 진행됨
//짝수만
for(let k = 0; k <10; k++){
    if(k%2){
        continue;
    }
    console.log(k);
}