/* Primitive
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3752748792830918n

/* Reference (Non - Primitive)
Array, Objects, Functions
*/

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "aditya",
    age: 18,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof score);                // o/p - number
console.log(typeof scoreValue);           // o/p - number
console.log(typeof isLoggedIn);           // o/p - boolean
console.log(typeof outsideTemp);          // o/p - object
console.log(typeof id);                   // o/p - symbol
console.log(typeof anotherId);            // o/p - symbol
console.log(typeof bigNumber);            // o/p - bigint
console.log(typeof heroes);               // o/p - object
console.log(typeof myObj);                // o/p - object
console.log(typeof myFunction);           // o/p - function
