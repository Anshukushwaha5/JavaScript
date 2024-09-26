// const user = {
//     username: "Anshu Kumar",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//         // console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }
// // console.log(user.getUserDetails());
// // console.log(this) 



// // // this and new 

// function CompanyUser(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     this.greeting=function(){
//         console.log(`welcome ${this.username}`)
//     }

//     return this;
// }

// const anshu = new CompanyUser("anshu",5,true)
// console.log(anshu)

// // this - this keyword is refer current context
// // new - new keyword is create new instance


// console.log(anshu.constructor)
// // constructor - this is reference about self




// const tinderUser={
//     username:"AnshuKumar",
//     isLoggedInL:true,
//     loginCount:33,
//     greeting: function(){
//         console.log(this)
//     }
// }
// console.log(tinderUser.greeting())


function instauser(username,isLoggedIn,loginCount){
    this.username=username
    this.isLoggedIn=isLoggedIn
    this.loginCount=loginCount
    this.greeting=function(){
        console.log(`hello ${this.username}`)
    }
    return this;
}

const anshu = new instauser("anshu",true,29)
console.log(anshu)

console.log(anshu.constructor)

