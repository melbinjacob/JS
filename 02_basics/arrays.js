const myArr = [0,1,2,3,4,5];
const myHeroes = ["Iron man", "Hulk", "Thor"];

const arr = new Array(1,2,3,4,5);
// console.log(myHeroes[0]);

// Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

myArr.unshift(99)
myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(40));

// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A", myArr);

const myNewArray = myArr.slice(1,3);

console.log(myNewArray);

console.log("B", myArr);
console.log("A", myArr);

const myNewArray2 = myArr.splice(1,3);
console.log(myArr);
console.log(myNewArray2);
