/*object 객체*/

const superman = {
    name: '지은',
    age : 26,
}
console.log(superman.name);
console.log(superman['age']);

superman.hairColor = '검정';
superman['hobby'] = '강아지 산책 시키기';
console.log(superman);

delete superman.age;
console.log(superman);


//이름과 나이를 받아서 객체를 반환
// function makeObject(name, age){
//     return{
//         name : name,
//         age :age,
//         hobby : '산책',
//     }
// }

// const moung = makeObject('뭉치', 7);
// console.log(moung);

function makeObject(name, age){
    return{
        name,
        age,
        hobby : '산책',
    }
}

const moung = makeObject('뭉치', 7);
console.log(moung);

console.log('age' in moung);
console.log('birthday' in moung);

//in 
//나이를 확인 하고 성인인지 아닌지 구분하는 함수
function isAdult(user){
    if(!('age' in user) || user.age < 20){
        return false;
    }else{
        return true;
    }
}
const Moung = {
    name : '뭉치',
    age : 7,
}

const Jieun = {
    name : '지은',
}
console.log(isAdult(Moung));
console.log(isAdult(Jieun));


//for ... in 문
const Mike = {
    name : 'Mike',
    age : 30,
}; 

for(key in Mike){
    console.log(Mike[key]);
}

//method
let boy = {
    name : 'Clark',
    showName2: function(){
        console.log(this.name)
    }    
};

// boy.showName();

let man = boy;
boy = null;

man.showName2();