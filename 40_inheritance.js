
//inheritance - are user to acces properties of other 

const user={
    name:"Anshu",
    email:"abc@gmail.com"
}

const teacher={
    makeVideo:true
}

const teeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:teeachingSupport
}

teacher.__proto__=user;

// modern syntax 

Object.setPrototypeOf(teacher,TAsupport)

