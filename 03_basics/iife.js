// Immediatly Invoked Function Expressions [IIFE] 
//To immideatly invoke a function and also to save the function from global 

(function chai(){
    //Named iife
    console.log("DB CONNECTED");
})(); //IIFE does'nt know when to stop the context so a semicollon (;) is necessery to specify the end of the context 

((name) =>{console.log(`DB CONNECTED AGAIN ${name}`)})("Melbin"); //Simple iife 
