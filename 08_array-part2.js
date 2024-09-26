console.log("ram ram mitra");

const marvelhero=["thor","iromman,","spiderman","batman"];
const dcdero=["superman","batman","flash"]

marvelhero.push(dcdero);
console.log(marvelhero);

// concat()
let allheros = marvelhero.concat(dcdero);
console.log(allheros);


//spread
let all_spread_heros = [...marvelhero, ...dcdero];
console.log(all_spread_heros);

let arraywithsub=[2,4,4,55,[3,4,4],54,53,5,[35,5,53],534,53,53,34,34,34,[53,5,3,4,[5,35,53,8,868,[35,53,],635,3],53,53],545.54,45,534,];
let flatearray=arraywithsub.flat(Infinity);
console.log(flatearray);

// question ++++++++++++++++++++++++++++++++++++++++++++++++
let que1 = allheros.includes("Anshu");
console.log(que1);

let que2 = Array.isArray("ironman"); // is array or not //string hai
console.log(que2); //false


let que3 = Array.isArray([3,4,3,2,]);
console.log(que3); //true


console.log(Array.from("Anshu")); //conver string into array

console.log(Array.apply({name:"anshu"}));

let score1=100;
let score2=300;
let score3=400;

console.log(Array.of(score1,score2,score3));






