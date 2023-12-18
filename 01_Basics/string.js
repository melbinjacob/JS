const name = "Melbin"
const repoCount = 10

// console.log(name+repoCount+"Something");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ${VAR} String interpolation

const gameName = new String("Melbin-Jacob");

// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("J"));

const newString = gameName.substring(0,5)

// console.log(newString);

const anotherString = gameName.slice(-12,4);
// console.log(anotherString);

const newString1 = "   Hithest  wonder"
// console.log(newString1);
// console.log(newString1.trim());


const url = "https://melbin.com/melbin%20jacob"



console.log(url.replace("%20", "-"));

console.log(url.includes("jacob"));

console.log(gameName.split("-"));