const name = "Aditya"
const repoCount = 10

// console.log(name + " has " + repoCount + " repos.");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // This method is calle String interpolation.

const gameName = new String('aditya-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)     // 4 excluded
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    aditya    "
// console.log(newStringOne);
// console.log(newStringOne.trim());      // remove whitespaces from start and end

const url = "https://aditya.com/aditya%20gaur"

console.log(url.replace('%20', '-'));

console.log(url.includes('xyz'));

console.log(gameName.split('-'));
