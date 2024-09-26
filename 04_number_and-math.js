
// number and math

const score=400;
 console.log(typeof(score));

 const balance = new Number(100);
 console.log(typeof(balance));

 console.log(balance);

 console.log(balance.toString());
 console.log(balance.toString().length)

 console.log(typeof(balance));//has been string

 console.log(balance.toFixed(2));


 // use of precision
 const othernumber=234.84573;

 console.log(othernumber.toPrecision(4)); // give a precision value
 console.log(othernumber.toPrecision(2));
 console.log(othernumber.toPrecision(3));

 console.log(othernumber.toString().length);
//  console.log(othernumber.length);

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //this by default us standard 000,000,000,

// to chnage into indian standard  you can use ('en-IN')

console.log(hundreds.toLocaleString('en-IN'));

// Number.multiple function you can use



// ============================== Math ====================================

console.log(Math);


console.log(Math.abs(-15)); // absolute value ( its change -value into +positive)

console.log(Math.round(4.5)); // round of value 5
console.log(Math.round(4.4)); // round of value 4
console.log(Math.round(4.7)); // round of value 5


console.log(Math.ceil(4.3)); // its take top value 5
console.log(Math.ceil(4.1)); // its take top value 5
console.log(Math.ceil(4.9)); // its take top value 5

console.log(Math.floor(4.9)); // its take low value 4
console.log(Math.floor(4.5)); // its take low value 4
console.log(Math.floor(4.1)); // its take low value 4


// squre root
console.log(Math.sqrt(144)); // 12

//Min max value

console.log(Math.max(4,9,2,1)); // 9
console.log(Math.min(4,9,2,1)); // 1



// Random value

console.log(Math.random()); // this always return value between (0-1)
console.log((Math.random()*10)+1); 
console.log((Math.random()*100)+1); 
console.log(Math.floor(Math.random()*10)+1); 


const max=20;
const min=10;

console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+max);
console.log(Math.floor(Math.random()*(max-min+1)));

console.log(balance.toFixed(2));