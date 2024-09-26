// "use strict"; // java automatically run in strict mode by default

// alert("hello") // we are using nodejs not browser 

//ECMA standard

//1. tc39 document
//2. mdn




// your code should readable and easy to understand


console.log("hello");


// PREMETIVE DATATYPE

//null
//number  // value 2 to power 53
//boolean
//bigInt
//string
//symbol
//undefined

let tempereture=null; 
console.log(typeof(tempereture))// this print object (this is a system fault)

let age=20;
console.log(typeof(age));


let Name="Anshu";
console.log(typeof(Name));

let isLogedin=false;
console.log(typeof(isLogedin));

let networth_of_Bill_Gate_is = 941674000000000000000000000000; // in crores // its used to define big data like stock market, redit . facebook 
console.log(typeof(networth_of_Bill_Gate_is));


let like=Symbol;
console.log(typeof(like)); //use for define uniqueness 

let seadeep;
console.log(typeof(seadeep));


//Non premitive 

// object

const person1={
    name:"abhishek",
    age:19,
    adhar:123456789875,

}

console.log(person1);
let type=typeof(person1);
console.log(type);
