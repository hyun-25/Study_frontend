/*
챕터 2-3 함수 타입
*/

// Parameter
function add(x:number, y:number): number{
    return x + y;
}

const result = add(10,5)


//Parameter II
// function addToCart(name:string, price: number, quantity: number){
//     return `${name}, ${price}, ${quantity}`
// }

// addToCart("orange", 100, 5) //수가 많거나 적으면 오류


//Default Parameter
// function addToCart(name:string, price: number, quantity: number = 1){
//     return `${name}, ${price}, ${quantity}`};

// addToCart("orange", 10) //"orange,10,1"반환
// addToCart("pineapple", 5, 3)//"pineapple,5,3"반환


//optional Parameter
function addToCart(name:string, price: number, quantity?){
    return `${name}, ${price}, ${quantity || 1}`};
    //quantity 값이 전달되지 않았으면 1을 사용해라

addToCart("orange", 150)
addToCart("grape", 100, 2)

//Contextual Typing
// const numbers: number[] = [ 1,2,3,4,5 ];
// const letters: string[] = [ "a","b","c","d"];

// numbers.map(element=>{
//     element.
// })

// letters.forEach(letter=>{
//     letter.
// })


//Return type annotation
function addTwoValues(x:number, y: number): string {
    return `${x}${y}`;
}
function addTwoNumbers(x:number, y: number): number {
    return x + y;
}
function isTen(x:number, y: number): boolean {
    return x + y == 10;
}


//void, never
function logMessage(message:string): void{
    console.log(message)
}
//never 자주 사용 X
function throwError(message: string): never{
    throw new Error(message);
}