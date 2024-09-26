// diagram
// https://excalidraw.com/#json=Uk-U4lP2LCDL_B7nKr2qq,HtRHfet624ag-Nl1nkBq7g

function setUserName(username){
    this.username=username;
    console.log("called")
}

function setUserDetails(username,email,companyName){

    // this.username=username;
    
    // calling setUserName function from global

    // setUserName(username) // its only reference not calling
    // setUserName.call(username) // its call but this line using own this 
    setUserName.call(this, username); // its calling and its work this of this function

    this.email=email;
    this.companyName=companyName;
}

 const anshu=new setUserDetails("anshu","anshukushwaha057@gmail.com","infosys")
 console.log(anshu)


