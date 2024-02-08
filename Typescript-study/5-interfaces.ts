/*
챕터 2-5 인터페이스
*/

// 기본 문법
// interface 이름 {
//     속성이름: 속성타입;
//     속성이름: 속성타입;
//     메서드이름(): 메서드타입;
// }

// interface User{
//     id: number;
//     name: string;
//     isPremium: boolean;
//     someMethod(): void;
// }

// const userA: User = {
//     id: 10,
//     name: "Bill",
//     isPremium: false,
//     someMethod(){
//         console.log("some method called")
//     }
// }


// type alias vs interface
// 두 기능의 목적은 크게 다르지 않다.
 // 타입 Alias => type User = { }
 // 인터페이스 => interface User { }
 // 타입 Alias => 객체 포함, 리터럴, 원시값등을 타입으로 가질 수 있다.
 // 인터페이스 => 객체 타입(형태)으로 사용해야 한다.
 // 확장 문법이 다르다.


// readonly & optional property
// interface User{
//     readonly id: number;
//     name: string;
//     isPremium?: boolean;
// }

// const testUser: User = {
//     id: 100,
//     name: "John"
// }

// testUser.id = 200 //readonly이기 때문에 오류


// 메서드/함수 타입
interface User{
    readonly id: number;
    name: string;
    isPremium?: boolean;
    greet(): void;
}

const testUser: User = {
    id: 100,
    name: "Nathan",
    isPremium: false,
    greet(){
        console.log('Hello Nathan')
    },
}

testUser.greet();


// 확장 및 조합
interface Person{
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

interface Student extends Person, Employee {
    studentId: number;
}

const personA: Person = {
    name: "Eli",
    age: 30
}
const studentA: Student = {
    name: "John",
    age: 29,
    studentId: 12345,
    employeeId : 38383
}