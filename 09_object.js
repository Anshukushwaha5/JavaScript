//object literals+++++++++++++++++++++++++++++++++++++++++++++++

const mysym=Symbol("Henex");

// object 

let user1={
    name:"anshu",
    email:"anshukushwaha.himt004@gmail.com",
    mobile:9565877565,
    mbol:Symbol("AK"),
    recent_login:["sat","mon","tue"],
    active:false,
    "father":"Mr. Amarjeet kushwaha",
    // mysym:Symbol("henex")
    [mysym]:"henex"


}

console.log(mysym);

// user1.mbol

console.log(user1.mbol);
let type=typeof(user1.mbol);
console.log(type);

console.log(user1["name"]);

user1["name"]="rahul";

console.log(user1["name"]);

console.log(user1.father);// its can be use in version 22

console.log(user1.mbol);

user1.email ="superman@yahoo.com";


// Object.freeze(user1);
console.log(user1);

user1.mobile=4487851548;

console.log(user1);

user1.greeting = function(){
    console.log("hello user1 welcome in your dashboard");
}

console.log(user1.greeting());

// dash=function(){
//     fjewo
// }

user1.greetingtwo=function(){
    console.log(`hello brother ${this.name}`);

}

console.log(user1.greetingtwo());
