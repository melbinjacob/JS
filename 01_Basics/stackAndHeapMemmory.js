// Data types are classified into PRIIATIVE and NON PRIMITIVE / REFFERENCE TYPE 

// Two types of memmories STACK and HEAP

// Stack memory is used on PRIMITIVE data types 
// Heap memory is used on NON PRIMITIVE / REFFERENCE data types 

// When Stack memory is used we will get a copy of the variable 
// When Heap memory is used we will get the original refference of the Data type

let myPexelsName = "Melbin"
let anotherName = myPexelsName

anotherName = "Jacob"

// console.log(myPexelsName);
// console.log(anotherName);


//          ---------------------               -----------------------------------------------
//         |      userTwo        |----         |                                               |
//          ---------------------     |        |                                               |
//          ---------------------     |        |                                               |
//         |     userOne         |------------>|                                               |
//          ---------------------              |          {                                    |
//          ---------------------              |             email : "melbinjacob@mail.com",   |
//         |    myPexelsName     |             |             upi : "user@ybl"                  |
//          ---------------------              |                                               |
//          ---------------------              |          }                                    |
//         |      anotherName    |             |                                               |
//          ---------------------              |                                               |
//          ---------------------              |                                               |
//         |     myPexelsName    |             |                                               |
//          ---------------------               -----------------------------------------------
//              STACK MEMORY                                      HEAP MEMORY


let userOne =  {
    email : "melbinjacob@mail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "lotta@lottie.com";

console.log(userOne);
console.log(userTwo);