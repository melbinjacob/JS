function sayMyName () {
    console.log("M");
    console.log("E");
    console.log("L");
    console.log("B");
    console.log("I");
    console.log("N");
}

// sayMyName();

// function addNum (num1, num2){
//     console.log(num1 + num2);
// }

function addNum (num1, num2){
    // let result = num1 + num2;
    // return result
    return num1 + num2;
}

const result = addNum(4, 4)

// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         return "Please enter your username! "
//     }else{
//         return `${username} just logged in! `
//     }
// }

// function loginUserMessage(username){
//     if(!username){
//         return "Please enter your username! "
//     }else{
//         return `${username} just logged in! `
//     }
// }

function loginUserMessage(username = "An user"){
    return `${username} just logged in! `
}

console.log(loginUserMessage());
console.log(loginUserMessage("Melbin"));