// function 
function myname(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

myname()

function addTwoNumber(n1,n2){//(n1,n2)parameter
    
    console.log(n1+n2);
    return n1+n2;
}

addTwoNumber(2,8); // (2,8) argument

const result=addTwoNumber(3,5);
console.log("Result",result);

function userLoggin(userName){ // override (username="Ram")
    if(userName===undefined){ //(userName===undefined) = (!username)
        console.log("plese enter username");
        return ;

    }
    return `${userName} just logged in` ;


}

console.log(userLoggin("Anshu"));
console.log(userLoggin());

function playerselecting(usernaem="sam"){
    if(!usernaem){
        console.log("plase enter your Name");
        return ;
    }
    return`${usernaem} is selected`;
}

console.log(playerselecting("RR"));
console.log(playerselecting());

