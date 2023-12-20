const user = {
    userName: "Melbin",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} welcome to the website.`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// console.log(this);

// function some(){
//     let userName = "Melbin"
//     console.log(this);
// }

// some()

// const chai = function(){
//     let userName = "Melbin"
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "Melbin"
    console.log(this.userName);
}

// chai()

// const arrFn = (num1, num2) => {
//     return num1 + num2
// };


// const arrFn = (num1, num2) => num1 + num2

// const arrFn = (num1, num2) => (num1 + num2)

const arrFn = (num1, num2) => ({user: "Hitesh"})

// console.log(arrFn(2, 2));