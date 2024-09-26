// shopping card

function CalculateCartPrize(...Number1){  //... is known as Spread and Rest operator :- name calling depend on operation
    return Number1;

}
console.log(CalculateCartPrize(25,25,25))


// passing object in function ++++++++++++++++++++++++++++++++++++
const user={
    username:"Anshu",
    prize: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and prize ${anyObject.prize}`);

}

handleObject(user)

handleObject({
    username:"kalua",
    prize:299
})

//passing array in object +++++++++++++++++++++++++++++++++++++++++++++

const myarray=[100,200,300];
function returnSecondryValue(getArray){
    return getArray[1];

}

console.log(returnSecondryValue(myarray));

console.log(returnSecondryValue([300,400,500]));


