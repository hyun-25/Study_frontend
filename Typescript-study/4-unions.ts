/*
챕터 2-4 유니언 타입
*/

//유니언 기초
let userId: string | number;

userId = 1
userId = "100"

// userId = true //불리언이라 오류
// userId = {} // 빈객체라 오류

function printUserId(id: string | number){
    console.log(id)
}

printUserId("1")
printUserId(1)


//type narrowing
function processValue(value: number | string){
    //문자열 경우
    if(typeof value === 'string'){
        return value.toUpperCase();
    }

    //숫자의 경우
    return value.toString().toUpperCase();
}


//배열 사용 예시
let mixedValues: ( string | number )[];

mixedValues.push("100")
mixedValues.push(100)


//리터럴과 유니언 타입
const toggle = (option: "on" | "off" ) => {
    console.log(option);
}

// toggle("on")
// toggle("off")

type Size = "xs" | "s" | "m" | "l" | "xl";

let tShirtSize: Size;

tShirtSize = "m"
tShirtSize = "xxl" //오류발생

function setSize(size : Size){
    switch(size){
        case "xs":
            // xs처리
            break;
        case "s":
            // s처리
            break;
    }
}

//type aliases와 유니언

