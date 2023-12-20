// For of

const arr = [6,2,3,4,5]

for (const val of arr) {
    // console.log(arr);
}


const greetings = "Hello world";

// for (const val of greetings) {
    
//     if (val == " "){
//         continue
//     }
//     console.log(`Each char is: ${val}`);
// };

//Maps

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of Amarica")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map);

for (const [ke, val] of map) {
    // console.log(ke, ":", val);
}

const myObject = {
    game1 : "GTA",
    game2 : "Pubg"
}

for (const [g, v] of myObject) {
    console.log(g, ":", v);
}