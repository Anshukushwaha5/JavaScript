// array 

//declearation of Array

//Array : - we can declear multiple element of diffrent diffrent data type in a single variable with help of Array


let myArray1 = [2,3,4,5,35435,45,32,];

let myArray2 = [2,3,4,5,35435,45,32,"banana","cars"];

let myArray = [2,3,4,5,35435,45,32,true,Symbol,"Anshu",undefined];

console.log(myArray[4]);

console.log(myArray);

const arr = new Array(3,6,43,3,"anshu");
console.log(arr);

// push() --- add a new element in the last  ++++++++++++++++++++++++++++++++++++
myArray.push(90);
myArray.push(900);
console.log(myArray);

//pop() ---- delete last element
myArray.pop();
console.log(myArray);

myArray.pop([4]); // not working
myArray.pop(4); // not working
console.log(myArray);

// unshift() --- its insert a new element in starting
myArray.unshift(23432);
console.log(myArray);

// shift() ----- delete first elemmet

myArray.shift();
console.log(myArray);

// question in array
 let que1 = myArray.includes(10);
 console.log(que1);

 console.log(myArray.indexOf(90));
 console.log(myArray.indexOf(5));

 console.log(myArray);
 console.log(myArray.join()); //its convert all array into string(binding)

 let bindarr = myArray.join();
 console.log(typeof(bindarr));

 // slice and splice

 const arrs = [1,2,3,4,5,6,7,8,9,10,11,12];
 console.log("A",arrs);

 //slice
 console.log("B",arrs.slice(1,4)); // last range are not include

 //splice
 console.log("C",arrs.splice(1,4)); // only selected range are include and its delete all element ecxcept selected range of original array elements

 console.log("A",arrs);
















