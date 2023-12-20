function calculatedCartPrice(...num1){
    return num1
}


// console.log(calculatedCartPrice(2000, 4000, 2000, 4038, 48797));

const user = {
    userName: "Melbin",
    prices: 199
}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.userName} and the price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName: "Sam",
    price: 399
})

const myNewArray = [100, 200, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));