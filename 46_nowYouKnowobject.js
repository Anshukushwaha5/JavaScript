const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor);

// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)

// const mynewObject = Object.create()

const chai = {
    name: "ginger chai",
    prize: 30,
    isavailable: true,

    orderChai: function(){
        console.log('chai nhi bani');
        
    }
}

// console.log(chai);


Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false,
    
    // configurable: false
    
}) 
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){      
        console.log(`${key} : ${value}`)
    }
}

