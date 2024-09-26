class user{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }

    logMe(){
        console.log(`${this.username} loggd in`)
    }

    static creatId(){
        return `${this.username}A1B2`
    }

    
}

const Anshu=new user("anshu","anshukushwaha057@gmail.com")

// console.log(Anshu.creatId())

// console.log(user)

class HR extends user {
    constructor(username,email,add){
        super(username) // call this
        this.email=email
        this.add=add;
    }
}

const vikash=new HR("Vikash","vikash@yahoo.com","siwan")

console.log(vikash.logMe());
