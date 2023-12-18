// Basically data types are catogorized as primative and non primative data types based on how data is stored and acessed on storage.


// *******************  PRIMATIVE  *************************** // Calls by value and referrences are copied and all changes made are done in this copy.

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const score = 2;
console.log(typeof score);
const scoreValue = 2.2;
console.log(typeof scoreValue);


const isLoggedIn = false;

const outsideTemp =  null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId); // False

const bigNumber = 97987979879879879709845345345n // BigInt
// *******************  NON PRIMATIVE / REFFERENCE TYPE  *************************** // The refferences of these data types are allocated directly 

// 1. Array
// 2. Object
// 3. Function


const heros = ["Iron man", "Thor", "Hulk"];
const melbin = {
    name:"Melbin",
    surname:"Jacob",
    age:21,
    loggedIn:false
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);