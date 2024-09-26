// function nested // its also known as closer

function one() { //icecream method
    const username = "Anshu";
    function two() {
        const websites = "Youtube";
        console.log(username); 
    }
    // console.log(websites);

    two()
}

// one()


if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website ="youtube";
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


addOne(5);
function addOne(num){
    console.log(num+1);
    return num+1;

}
addOne(8);



// addTwo(5);
const addTwo = function(num){ // expression // variable too powerful in js, its can hold function 
    console.log(num+2);
    return num+2;
}

addOne(10);

