//기본 객체 타입

// {
//     property_name: property_type
// }

// let monitor : { brand : string; price: number }

// monitor.brand = "LG"
// monitor.price = 120

// monitor = {
//     brand: "LG",
//     price: 120 
// }


//타입추론

let monitor = {
    brand: "LG",
    price: 120
}

//Optional 프로퍼티
// let user : {id:string; name: string; age?: number}; // ? : 선택사항을 뜻함

// user = {
//     id: "1234",
//     name: "John"
// }

//Readonly 프로퍼티 (readonly : 처음값이 고정)
let user : {readonly id:string; name: string; age?: number}; 

user = {
    id: "1234",
    name: "John"
}

user.name = "John Smith";
user.id = "5678";

let apiConfig: {
    readonly clientKey: string;
    readonly url: string;
}

//타입 별칭( Type Alias )

type UserType = {
    id: string;
    name: string;
    age: number;
}

let user1: UserType = {
    id: "1",
    name: "John",
    age: 20
}

let user2: UserType = {
    id: "2",
    name: "Sarah",
    age: 30
}


let users: UserType[];

users.push(user1);
users.push(user2);

//Nested 객체 ( 중첩 객체 )


type Payload = {
    timestamp: number;
    type : string;
    user: {
    readonly id: string;
    isActive?: boolean;
    email: string[]
    }
}

const payload: Payload = {
    timestamp: 12893718,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: ["testmail@gmail.com", "testmail@gmail.com"]
    }
}
