// Singleton
// Object.create



const mySym1 = Symbol("Key1")
const mySym2 = Symbol("Key2")


// Object Literals

const jsUser = {
    name: "Melbin",
    "full name": "Melbin Jacob",
    age: 21,
    [mySym1]:"Key1",
    location: "Jaipur",
    email: "Melbin@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Sunday", "Monday"]
};

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym1]);

jsUser.email = "hithesh@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "hithesh@microsoft.com";

// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser);
// console.log(jsUser.greeting());
console.log(jsUser.greeting2());