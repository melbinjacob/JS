const ACCOUNT_ID = 124343;
let accountEmail = "melbin@hey.com";
var accountPassword = "12345";
accountCity = "Kerala";
let accountState;


// ACCOUNT_ID = 2 // Variables declared with const keyword cannot be changed.
accountEmail = "hey@gmail.com";
accountPassword = 2121212;
accountCity = "Banglore";

/*
    Prefer not to use var because of the issue in block and functional scope
*/

console.log(ACCOUNT_ID);
console.table([ACCOUNT_ID, accountEmail, accountPassword, accountCity, accountState]);