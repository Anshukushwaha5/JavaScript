const arr=[4,2,45,2,11,3]
for(const num of arr){
    console.log(num);
}

const str="Anshu Kushwaha";
for(const latter of str){
    if(latter==' '){
        continue;
    }
    console.log(latter)
}

let date=new Date();
let dates=date.toLocaleDateString('en-IN');//iso code
console.log(dates);



// map =>map are use to print unique value 

const map =new Map();

map.set('IN',"India");
map.set('SL',"Sri Lanka");
map.set('FR',"France");
map.set('UK',"United Kingdom");
map.set('IN',"India");
map.set('JP',"Japan");
map.set('US',"United State");

// console.log(map);

map.forEach((allset)=>{
   console.log(allset) 
})

for(const [allset,data] of map){
    console.log(allset,data);
}

for(const [country_ISO_Code] of map){
    console.log(country_ISO_Code)
}

for(const [keya,value] of map){
    console.log(keya,'---->',value)
}

const myobject={
    "game1":"PUBG",
    "game2":"GTA",
    "game3":"Asphalt-9",
    "game4":"NFS"
}

// for(const [keys,value] of myobject){
//     console.log(keys,'-=-=>',value);
// }

console.log("object started form here",myobject);

for(const value in myobject){
    console.log(myobject[value]);
}
console.log("for in looooooooooooooooop")
for(const key in myobject){
    console.log(key)
}

for(const key in myobject){
    console.log(`${key} ======>>> ${myobject[key]}`);
}

const ProgrammingLanguage=["c","cpp","c#","JS","PY"];
for(const key in ProgrammingLanguage){
    console.log(ProgrammingLanguage[key]);
}



for(const [map2,valur] of map){
    console.log(map2,valur);
}


// forEach

ProgrammingLanguage.forEach( (item)=>{
    console.log(item)
} )


function print(item2){
    console.log(item2)
}

ProgrammingLanguage.forEach(print);

ProgrammingLanguage.forEach((item,index,areer)=>{
    console.log(item,areer,index)
})

const myarray=[
    {
        python:"Programming",
        developedBy:"Blank"
    },
    {
        c:"programming",
        developedBy:"Denis Ritche"
    },
    {
        js:"Programming",
        developedBy:"Blank"
    },
    {
        HTML:"Markup_Language",
        developedBy:"Blank"
    }
]

myarray.forEach( function(item){
    console.log(item.developedBy)
} )

ProgrammingLanguage.forEach(print);


