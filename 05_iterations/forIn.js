const myObject = {
    js : "Javascript",
    cpp : "C+++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const ob in myObject) {
    // console.log(`${ob} is the shortcut for: ${myObject[ob]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of Amarica")
map.set("FR", "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
}

// for OBJECTS use FOR IN 
// for ARRAYS use FOR OF