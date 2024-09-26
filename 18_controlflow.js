// logic flow or control flow

if(true){
    console.log ("you has been enter in if block");
}

const IsUserLoggedIn = true;

if(IsUserLoggedIn){
    console.log("WELCOME");
}

/*conditon / comparision operator
< lessthan
> greaterthan
<= lessthan or equal
>= greaterthen or equal

== comparision ex- (2=="2")- true
!= not equal

=== strict comparision
(2==="2")-false its operator compare datatype also with value

!== not strict equal

*/


const temperature=40;

if (temperature===40){
    console.log("temperature is 40 ");
}
else if( temperature<40){
    console.log("temperature is less than 40");
}
else{
    console.log("temperature is greater than 40");
}
console.log("Executed");


const score=200;
if(score>100){
    const power="fly";
    console.log(power);   
}
// console.log(`player can ${power}`); its now execute just becoz scope

//implicit scope
const balance=1000;
if(balance>500) console.log("you can buy"); //its not good habit


if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}

else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("more than 1000");
}

const userLoggedIn=true;
const debitcard=false;
const loggedInWithGoogle=true;
const loggedInWithfacebook=false;
const creditcard=false;
const Male=false;

if(creditcard||debitcard ){
    console.log("You can shop ");
}
else{
    console.log("you can not shop");
}


// switch condition 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch(month){
    case 1:
        console.log("jan");
    break;

case 2:
        console.log("feb");
    break;
    case 3:
        console.log("mar");
    break;
    case 4:
        console.log("apr");
    break;
    case 5:
        console.log("may");
    break;
    case 6:
        console.log("jun");
    break;
    case 7:
        console.log("jul");
    break;
    case 8:
    console.log("aug");
break;
default:
    console.log(undefined);
}


//true value- 1 , true , "string" , -1 , [] , "0" , "false" , 'false' " " , {} , function(){},  

//false value - false , 0 , "" , -0 , bigInt 0n , null , undefined , NaN   


const userEmail="Anshu@gmail.co.in";

if (userEmail){
    console.log("got user email");
}
else{
    console.log("don't have email");
}


const userarray=[];
if (userarray.length===0){
    console.log("array is empty / true");
}
else{
    console.log("its a array");
}

const emptyObject={};
if(Object.keys(emptyObject).length===0){
    console.log("empty array");
}
else{
    console.log("Object");
}

console.log(Object.values(emptyObject));
console.log(emptyObject.hasOwnProperty("lll"));

// false ==0 -->true
// false =="" -->true
// 0 =='' -->true

// Nullish coalescing operator (??):null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);


let val2;
val2 = null ?? 10;
console.log(val2);


let val3;
val3 = undefined ?? 16;
console.log(val3);

let val4;
val4 = null ?? 120 ?? 100 
console.log(val4); 

// terniary operator

// condition ? true :false 
const iceTeaPrize =100;
iceTeaPrize <= 80 ? console.log("less than 80") : console.log("morethan 80");

// ek time pe ham sabhi code ko execute nhi karna chahte hme chahiy control 



