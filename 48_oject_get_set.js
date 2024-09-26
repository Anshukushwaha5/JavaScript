const user={
    _email:"a@ansKKu.com",
    _password :"aKaka",

    // uske memory se leke aata hai aur ukse uper aply krta hai (ye basiclay ek method)
    get email(){
        return this._email.toLowerCase();
    },
    set email(value){
        this._password = value;
    }
}

const tea = Object.create(user)

console.log(tea.email);
 

