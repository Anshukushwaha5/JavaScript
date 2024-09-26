//immediately invoked function expression IIFE
 

//named iffe
(function suta(){ 
    console.log(`DB connectd`);
})();

//global scope ke polution se problem hoti hai kae bar , global scope ke polution ko hatane ke liy humne iffe ka use kiya 


// unnamed iife
( ()=>{
    console.log(`babu`);
} )();


// prameter iife
( (name)=>{
    console.log(`DB CONNECTED TO ${name}`);
} )("Anshu");


