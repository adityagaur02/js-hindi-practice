// array

const myArray = [0, 1, 2, 3, 4, 5]
const myArray1 = ["abc", "xyz"]

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[0]);

// Array Methods

// myArray.push(6)                       //adds 6 in the end
// myArray.push(7)                       //adds 7 in the end
// myArray.pop()                         //removes last element

// myArray.unshift(9)                       //adds 9 to the starting
// myArray.shift()                          //removes 9 from staring

// console.log(myArray.includes(9));           // boolean value
// console.log(myArray.indexOf(3));            // returns index 3 and in case of not-defined value(9) it gives -1

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);               // gives value in String


/*                             slice, splice                          */

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)               // index 3 not included

console.log(myn1);
console.log("B", myArray);


const myn2 = myArray.splice(1, 3)              // index 3 included but it manipulates/changes the original array also
console.log("C", myArray);
console.log(myn2);
