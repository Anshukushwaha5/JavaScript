class user {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
     this._password.toUpperCase()
    }
}


const vikash = new user("Vikash", "vikash123")
console.log(vikash.password);


function user1(email, password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this.email = value;
        }
    })
    Object.defineProperty(this, 'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
            this.password = value;
        }
    })
}


const vishu = new user1("vishu@gmail.com","aishu123")
console.log(vishu.password)


