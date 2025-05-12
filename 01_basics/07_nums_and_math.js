const score = 400

const balance = new Number(100)
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));     // it will focus on 3 digits o/p=23.9 if 123.89 then o/p=124

const hundreds = 1000000
// console.log(hundreds.toLocaleString());    // by default US value so o/p= 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));    // by Indian value so o/p= 10,00,000

/* ********************* Maths *********************** */
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));             // Use top value (like 5 for 4.2, 4.9)
// console.log(Math.floor(4.9));            // Use low value (like 4 for 4.2, 4.9)
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                                  // random values from 0 to 1
console.log((Math.random()*10) + 1);                         
console.log(Math.floor(Math.random()*10) + 1);               // random value from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);      // random value from 10 to 20 