// const myname= "Anshu    ";
// const mylastname="Kushwaha    "

// console.log(myname.trim())

// // i want to add own method in 
// // console.log(mylastname.trueTrim)


const hero = ["thor", "spiderman"]

const heroPower = {
    thor: "hammer",
    spiderMan: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderMan}`)
    }
}

Object.prototype.anshu = function () {
    console.log(`anshu is present in all object`)
}

Array.prototype.heyAnshu = function () {
    console.log(`anshu says hello`)
}

// heroPower.anshu()

// hero.anshu()

hero.heyAnshu()

// heroPower.heyAnshu()


String.prototype.trueLength=function(){
    console.log(this)
    console.log(`true length is: ${this.trim().length}`)
}

"anshu".trueLength()

const capitalOfIndia="New Delhi"

capitalOfIndia.trueLength()

// trueLength("rahul") its not working 

 



