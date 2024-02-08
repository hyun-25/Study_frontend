
// 문자열 (sting)

const a: string = "";
const b: string = "";
const c: string = ``; //템플릿 리터럴

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;


myName.toLocaleUpperCase()

message = 12


//숫자 타입 (nubmer)

let n: number = 100;

n = "100"
n.toUpperCase();


let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e - 5;

let total: number = count * price;
let average: number = total / 2;


let infinity : number= Infinity;
let minusInfinity : number = -Infinity;
let iAmNotANumber: number = NaN;


//불리언 (boolean)

let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen){
    console.log("hello we are open!")
}

if(!isCompleted){
    console.log("job not completed")
}

//&& || !

let isAvailable: boolean = isOpen && !isCompleted;


//null 널 타입

//let user: string | null = null;


function login(userName: string){
    user = userName;
}

function logout(){
    user = null;
}

login("Joey")
logout()

//null 값이 비어있다
//undefined 값이 할당되지 않았다

//any 타입 -> 안정성이 줄어든다

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();

