//ES6 

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

    encryptPassword() {
        return `${this.password}ABC`
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const vikash = new user("Vikash", "vikash@gmail.com", 123)

console.log(vikash.changeUserName())


//behind the scene

function userByFunction(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

userByFunction.prototype.encryptPassword = function () {
    return `${this.password}abcd`
}

const Abhishek = new userByFunction("Abhishek", "abhishek@gmail.com", 12345)
console.log(Abhishek.encryptPassword())

// prototypal behaviour

// inheritance in class

class client {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS ${this.username} `)
    }
}

class teacher extends user {
    constructor(username,email,password) {
        // this.username=username
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A NEW COURSE WAS ADDED by ${this.username}`);

    }
}

const Ram = new teacher("Ram Singh","ramsingh@gmail.com", 123)

Ram.addCourse()

const masalachai=new client("masala chai")
masalachai.logMe()

console.log(Ram===masalachai); //false

console.log(Ram instanceof teacher); // true

console.log(Ram instanceof client);







