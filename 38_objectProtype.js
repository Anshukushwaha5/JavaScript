function multipleBy5 (num){
    return num*5
}


multipleBy5.power=2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)


function createUser(user,price){
    this.user=user  //this mean jis 
    this.price=price
    
}

createUser.prototype.increament=function(){
    this.price++
}

createUser.prototype.printMe=function(){
    console.log(`${this.price}`)
}

const chai= new createUser("price",30)
const tea =new createUser("tea",30)

chai.printMe()
tea.increament() 