let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let dateCreated = new Date(2023, 0, 23)
// let dateCreated = new Date(2023, 0, 23, 5, 3)
// let dateCreated = new Date("2023-01-14")
let dateCreated = new Date("01-14-2014")

// console.log(dateCreated.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());

console.log(Math.floor(((((Math.floor(Date.now()/1000)/60)/60)/24)/365)));
console.log(1970+53);

let newDate = new Date();


console.log(newDate.toLocaleDateString("default",{
    weekday: "long",
    month: "long"
}));
