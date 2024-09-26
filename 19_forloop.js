// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let a = 1; a <= 15; a++) {
    const element = a;
    if (element == 10) {
        console.log("10 is best no.");
        continue;
    }
    console.log(element);

}

for (let i = 1; i < 10; i++) {
    console.log("outer loop", + i);
    for (let j = 1; j < 10; j++) {
        console.log("inner loop ", + j);
    }
}

// table print 
for (let i = 1; i <= 10; i++) {
    console.log("outer loop", + i);

    for (let j = 1; j <= 10; j++) {
        console.log("inner loop ", + i + '*' + j + '=' + i * j);
    }
}

let myarray = ["flash", "ironman", "batman", "superman"];
// console.log(myarray.length);
for (i = 0; i < myarray.length; i++) {
    const element = myarray[i]
    console.log(element);
}

let myNewArray = ["flash", "ironman", "batman", "superman"];
// console.log(myarray.length);
for (i = 0; i <= myNewArray.length; i++) {
    const element = myNewArray[i]
    if (element == "batman") {
        break;
    }
    console.log(element);
}

let ration = ["suger", "kishan", "oil", "biscuite", "pasta", "peanuts butter", "refined", "colget", "facewash", "god father perfume"]
for (i = 0; i <= ration.length; i++) {
    const bill = ration[i];
    if (bill == "colget") {
        console.log(`Colget is free ${bill}`);
        continue;
    }
    console.log(bill);
}





