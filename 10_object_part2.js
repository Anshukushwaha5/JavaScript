//singleton 
//constructor object creation 

const tinderUser = new Object() // singleton object

const tinderUser1={} // Non singleton object

tinderUser.Name="Anshu Kumar Kushwaha";
tinderUser.Mobile=9565877565;


console.log(tinderUser);
console.log(tinderUser1);

// nested object 

const regularuser ={
    email:"some@gmail.com",
    username:{
        userfullname:{
            userfirstname:"Anshu",
            userlastname:"Kushwaha"
        }
    }
}

console.log(regularuser.username.userfullname.userfirstname);
Object.freeze(regularuser);
regularuser.email="anshukushwaha@gmail.com";
console.log(regularuser);

// merge bind join 

const obj1={
   Name :"Hitesh",
    lastname:"baba"
};

const obj2={
    Name:"Rakesh",
    lastname:"kolhi"
};

// const obj3 ={obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2} //spread
 console.log(obj3);

 const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"abcc@gmail.com"
    },
    {
        id:3,
        email:"abcd@gmail.com"
    },
    {
        id:4,
        email:"abcf@gmail.com"
    }
 ];

 users[1].email="ramram@gamil.com";
 console.log(users);

 console.log(tinderUser);
 
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('Mobile'));
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

