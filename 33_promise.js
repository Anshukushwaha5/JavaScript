// const promiseOne = new Promise((resolve, reject) => {
//     // do an async task 
//     // DB calls, cryptography, network

//     setTimeout(() => {
//         console.log("async task is completed")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("promise consumed")
// })


// // promise two 

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task 2 completed");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("promise consumed");
// })



// // promise three 
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             username: "Anshu",
//             email: "anshukushwaha057@gmail.com"
//         })
//     }, 1000)
// })

// promiseThree.then(function (userOfThirdPromise) {
//     console.log(userOfThirdPromise);
// })


// //promise four
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "akashNagar", email: "akashnagar121@gmail.com" })
//     }, 1000)
// }).then((user) => {
//     console.log(user)
// })



// // promise five
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Vikash", email: "vikashgupta@gmail.com" })
//         }
//         else {
//             reject('ERROR:something went wrong')
//         }
//     }, 1000)
// })

// promiseFive.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolve or reject"))




// // promise using async 
// // promise six

// const promiseSix = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Sandeep", email: "sandeep@yahoo.com" })
//         }
//         else {
//             reject('ERROR: something went wrong in promiseSix')
//         }
//     }, 1000)
// })

// async function consumedPromiseSix() {
//     try {
//         let response = await promiseSix
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumedPromiseSix()


async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typecode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }

}
getAllUser()


// // response by using fetch and then catch finally 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
//     })
// .then((data) => {
//     console.log(data)
//     })
// .catch((error) => {
//      console.log("ERROR:", error);
//     })
// .finally(() => console.log("code has been exicuted"))
