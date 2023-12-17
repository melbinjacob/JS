// let score = "33ab";
let score = null;

// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// CONVERTION using Number()

// "33" => 33 (Number)
// "33abc" => NaN (Not a number)
// True (Bool) => 1 (Number)
// False (Bool) => 0 (Number)
// False (Bool) => 0 (Number)


// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "j";

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => True
// 0 => False
// "" => False
// "Stiring" => True

let someNumber = 33;
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof(stringNumber));

// *******************************************OPERATIONS*********************************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 Raised to the power of 2
// console.log(2**3); // 2 Raised to the power of 3 
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Melbin"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 1 + "2");
// console.log("1" + 1 + 2);


// console.log(true);
// console.log(+true);
// console.log(+"");


// *******************************************PREFIX AND POSTFIX**************************************


let gameCounter = 100;
gameCounter++
console.log(gameCounter);

++gameCounter
console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"