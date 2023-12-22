const  myNums = [1,2,3,4,5]


// const myTotal = myNums.reduce(function (acc, curVal) {
    
//     console.log(`acc: ${acc} and Current value: ${curVal}`);
//     return acc + curVal;
// },10)

// console.log(myTotal);


const myTotal = myNums.reduce((acc, cur)=> acc+cur,0)

// console.log(myTotal)

const arr = []

for(let i =0; i <= 100; i++){
    arr.push(i)
}
// console.log(arr);

const myTot = arr.reduce((acc, cur)=> acc+cur,1000);
// console.log(myTot);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "Mobile Dev",
        price : 5999
    },
    {
        itemName : "Data scirence",
        price : 12999
    },
];

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(cartTotal);