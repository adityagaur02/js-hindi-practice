const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "aditya"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "aditya"
//     console.log(this.username);
// }

const chai = () => {
    let username = "aditya"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {                          // if we use curly braces { } then we have to use return but not for parenthesis ( ) like in line 44
//     return num1 + num2                                    // it is called explicit return as we are using return
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)                // it is called implicit return

const addTwo = (num1, num2) => ({username: "aditya"})            // if we don't use parenthesis( ) then it will o/p undefined


console.log(addTwo(3, 4 ));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()