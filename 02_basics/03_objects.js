// singleton
// Object.create

/* when we declare object like literal then it doesn't make singleton but 
 when we declare object like constructor then it will be singleton */

// Object literal

const mySym = Symbol("key1")


const JsUser = {
    name: "Aditya",
    "full name": "Aditya Gaur",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aditya@ai.com"
// Object.freeze(JsUser)                      // it freezes the value means value will not be changed
JsUser.email = "aditya@flipkart.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
