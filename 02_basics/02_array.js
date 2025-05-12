const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heroes)                // concat operator
// console.log(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heroes]              // spread operator(...)

// console.log(all_new_heros);                  // this method will give spreadout values single-single value 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({name: "aditya"}));                // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));