//de-structure 
const Mobile={
    comapany_name:"Samsung",
    batter:5000,
    owner:"Rakesh",
    prize:23000,
    Storage:"256gb"

}

console.log(Mobile);
console.log(Object.keys(Mobile));

const {comapany_name}=Mobile;
console.log(comapany_name);

const {comapany_name:cn}=Mobile;
console.log(cn);


// API JSON 
// [
//     {},
//     {},
//     {},
//     {},
//     {}
// ]

// {
//     "name":"Anshu",
//     "course":"javascript",
//     "duration":"1month"
// }

        
