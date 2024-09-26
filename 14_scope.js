// let a = 10;
// const b = 20;
// var c = 30;


//global scope

let b=300; // global variable

//  {}block scope

if (true) {  
    let a = 10; //block variable
    const b = 20;
    var c = 30;  // var is not good habit in code
    d = 35;  // var is not good habit in code
    console.log("Inner",a)
}


// console.log(a);
// console.log(b);
console.log(c);
console.log(b);


for(let i=0; i<Array.length;i++){
    const element=Array[i];
}


