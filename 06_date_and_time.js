// dates and time 
//date is a type of object and date are count in milisecond from 1 jan 1970


let mydate = new Date();
console.log(mydate);
console.log(mydate.toString()); //Indian standard

console.log(mydate.toDateString());// only day and date in indian standard ( sat jun 01 2024)

console.log(mydate.toLocaleDateString()); // only date in form of (mm/dd/yyyy)

console.log(mydate.toLocaleDateString('en-IN')); //only date in form of (dd/mm/yyyy)

console.log(mydate.getDate()) // only date (dd)

let date = mydate.toISOString();
console.log(date); // 2024-06-01T17:37:48.673Z

console.log(mydate.toJSON()); //2024-06-01T17:37:48.673Z

console.log(mydate.toLocaleTimeString()); // only time 11:10:35 PM

console.log(mydate.toTimeString()); // 23:11:42 GMT+0530 (India Standard Time)

console.log(mydate.toUTCString()); //Sat, 01 Jun 2024 17:42:26 GMT

console.log(mydate.getHours()); // 23 at 13 passed 11 

console.log(mydate.getDate()); // 1 (dd)

console.log(typeof(mydate)); // object


// creating a new date ++++++++++++++++++++++++++++++++++++++++++++++++

// month are start in javascript from 0 (0 understand for january) 

let createddate = new Date(2003,8,11); // (yyyy/mm/dd) (0-11  are use for month-09876./)
console.log(createddate);

console.log(createddate.toLocaleDateString('en-IN'));


//creating date time day +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let timedate = new Date(2010,9,16,5,30); // Sat Oct 16 2010 05:30:00 GMT+0530 (India Standard Time)
console.log(timedate);

let onlydate = timedate.toLocaleDateString('en-IN');
console.log(onlydate);


let newcreateddate = new Date("2024/05/20");
console.log(newcreateddate);


let newmethod = new Date("2020-03-31");
console.log(newmethod);


//++++++++++++++++++++++++++++++++++++++++ TIME STAMP ++++++++++++++++++++++++++++++++++++

// 1000milisec = 1 second
//60000 milisec = 1 mint
//3600000 milisec = 1 hour

console.log(newmethod.getTime()); //1585612800000 (milisecond from 1/1/1970);


let abtime = Date.now();
console.log(abtime); //1717265763846


// let abotime = Time.now(); // invalid 
// console.log(abotime);

console.log(Date.now()); //milisecond

console.log(Math.floor(abtime/1000)); // second

console.log(Math.ceil(Date.now()/1000)); //second

console.log(Math.floor(Date.now()/60000)) //minut

console.log(Math.floor(Date.now()/3600000)) //hour


//++++++++++++++++++++++++++++++++++++++++
// console.log(getTime());
let newnew = new Date();
console.log(newnew.getDay()+1);
console.log(newnew.getSeconds());

let dd= `the date is today ${newnew.toLocaleDateString('en-IN')} and time is ${newnew.toLocaleTimeString()} minut${(newnew.getMinutes())} `;
console.log(dd);


let ff= mydate.toLocaleString('default', {weekday:"long",});
console.log(ff);

let mmdates = new Date();
let day=mmdates.toLocaleString('default',{weekday:"long"});
console.log(day);

console.log(Math.floor(abtime/1000))




