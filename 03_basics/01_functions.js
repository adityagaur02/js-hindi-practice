
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers (num1, num2) {               // here num1 and num2 are parameters

//     console.log(num1 + num2);
// }

function addTwoNumbers (num1, num2) {               // here num1 and num2 are parameters

    // let result = num1 + num2
    // return result                                   // anything after return will not be executed
    return num1 + num2
}

const result = addTwoNumbers(3, 5)                              // here 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {                     // default value but if new value provided this will be over-written
    if(!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage("aditya"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "aditya",
    price: "199"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));