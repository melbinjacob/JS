// if

const isUserLoggedIn = true;
const tempertature = 41;

// if(tempertature < 50){
//     console.log("Temp is less than 50.");
// }else{
//     console.log("Temp is greater than 50.");
// }

// < , > , <= , >= , == , != , === , !== 

const score = 200; 

// if(score > 100){
//     const power = "Fly";
//     console.log(`User power: ${power}`);
// };

// console.log(`User power: ${power}`);
 
const balance = 1000;

// if (balance > 500) console.log("Shorthand with implicit scope"),
// console.log("Test Two");                                             //Not a good practice. CONSERN READABLITY.


// if(balance < 500){
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// }else if (balance < 900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if ( userLoggedIn && debitCard && 2===3){
    console.log("Allow to buy courses");
};

if (loggedInFromEmail || loggedInFromGoogle ){
    console.log("User logged in!");
};


