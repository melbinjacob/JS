const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes);

// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes] //Spread operator
// console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],[6,7,8,[3,5,7,[4,5,6]]]];

const usableAnotherArray = anotherArray.flat(Infinity);
// console.log(usableAnotherArray);

// console.log(Array.isArray("Melbin"));
// console.log(Array.from("Melbin"));


console.log(Array.from({name:"Melibn", age:21, isLoggedIn:false})); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

