// this keyword :- its refer current contexts

const user={
    username:"Anshu",
    price:999,

    welcomeMessage : function(){

        console.log(`${this.username} welcome to website`);

    }
    }
user.welcomeMessage();
user.username="Akash";
user.welcomeMessage();

console.log(this);//window

function chai(){
    let user="Anshu";
    // console.log(this.user); //its can not use in function
}
 chai()

// arrow function


const chai2=function(){
    let userN="Anshu";
    console.log(this.userN);
}

chai2();


const chai3 =()=>{
    let userN="Anshu";
    console.log(this.userM);
}

chai3();


addTwoNumber=(n1,n2)=>{
    console.log(n1+n2);
    return n1+n2;
}

addTwoNumber(2,3);

//implicit return
const devide=(num1,num2)=>num1/num2

console.log(devide(8,2));

const subtract=(num1,num2)=>(num1-num2);
console.log(subtract(4,2));


const objectreturn = () => ({Name:"Anshu"});
console.log(objectreturn());
    

const myarray=[2,5,5,6,3,2,2];
// console.log(myarray.forEach());



