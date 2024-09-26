// data type conversion 


// "45" => 45
// "45fajgiwq" => NaN
// true => 1
// false => 0
//  


let score="45";

console.log(typeof(score));


let valueInNumber = Number(score); //this line convert sting into number

console.log(typeof(valueInNumber)); // cheking type 

console.log(valueInNumber);


// NUMBER INTO BOOLEAN

let isLoggedIn =1;  // 0 => False , 1 => true

let booleanisLoggedIn = Boolean(isLoggedIn);

console.log(booleanisLoggedIn);


console.log("booooooooooooooooooooooooooooooooooooolean");
// boolean into number

let India=true;
let pidoland=false;

console.log(Number(India)); //1
let check=(Number(India)); //declearation in a variable
console.log(check);


console.log(Number(pidoland)); //0 just becoz pidolan is false 

//empty string
let str="";

console.log(Boolean(str));

let str1="vinod";
console.log(Boolean(str1));


// change into string

let some=33;
console.log(typeof(some));
console.log(String(some));
let some1=String(some);
console.log(some1);
console.log(typeof(some1))

