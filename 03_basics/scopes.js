let a = 200


if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);  

// console.log(a);


function one(){
    const username = "Melbin"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true){
    const username = "Melbin";
    if(username == "Melbin"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ************************************** INTERESTING ************************************* JS HOISTING


console.log(add1(3));


function add1 (num){
    return num + 1
};

add2(5)

const add2 = function(num){
    return num + 2;
}
