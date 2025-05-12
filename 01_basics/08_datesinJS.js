// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate1 = new Date(2025, 0, 23)
let myCreatedDate2 = new Date(2025, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2025-01-14")
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());               //o/p for May= 4 so we do +1 for exact month
console.log(newDate.getDay());                 //o/p for Monday= 1


console.log(newDate.toLocaleString('default', {
    weekday: "long",                                       // o/p: = Monday
}));