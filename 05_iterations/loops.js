// for

// for (let i = 1; i <= 10 ; i++) {
//     if (i==5){
//         console.log("5 is the best number");
//     }
//     console.log(i);
// };


// for (let i = 0; i <= 10; i++) {
    
//     console.log(`Outer loop ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop ${j} and I: ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

let myArray = ["Flasn", "Batman", "Superman"];

for (let i = 0; i < myArray.length; i++) {
    
    const element = myArray[i];
    // console.log(element);
};



// Break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}