const user = {
    username: "aditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this                                              // this is not important to "return this" if we comment this no change in output
}

const userOne = new User("aditya", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);                           // in this case(when we don't use "new") user 2 will overwrite the user 1 and output will show details of user2
// console.log(userTwo);