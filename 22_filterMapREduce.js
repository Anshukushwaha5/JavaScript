const mobile=["Nokia","vivo","iphone","samsung","blackberry"]

const value=mobile.forEach((item)=> {
    console.log(item);
    return item; // its not return any value
});
console.log(value);

const a= new Map()
a.set(['chor',"akash","ram","umesh"])
console.log(a) // its not return any value

const myNun=[1,2,3,4,5,6,7,8,9,10];

// const number= myNun.filter( (num) => num >=5);
const number= myNun.filter( (num) => {
    return num>2
});
console.log(number)

const newNum=[]
myNun.forEach( (num) => {
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)

// const bookAfter = book.filter( (bk) => bk.publish>=2000)
// console.log(bookAfter)
// const history=book.filtera((bk)=>{
//     return bk.genre===history && bk.genre>=1995
// })
// console.log(history)

const newaNun=myNun.map((addTen)=>addTen+10)
console.log(newaNun);

 
const MultiplyByTenAndAddOne=myNun.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(MultiplyByTenAndAddOne);

// Reduce 
 const Numbers=[1,2,3,4,5]
 const ReduceValue=Numbers.reduce((acc,currval)=>acc+currval,3)
 console.log(ReduceValue);

 const reduced=Numbers.reduce(function(acc,currval){
    console.log(`Accumaumalator ${acc} current value ${currval}`)
    return acc+currval
 },0)
 console.log(reduced);

 
