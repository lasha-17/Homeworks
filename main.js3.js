//problem5

const numbers = [];
for (let i = -100; i < 100; i++) 
numbers.push (i); 
console.log(numbers);


//problem6

for(let i = -100; i <=100; i++)
numbers.push(i*i*i);
console.log(numbers);


//problem7

const userNames = ["Lasha", "Saba", "Keta", "Anna", "Zura", "Mariami", "Nino", "Gigi", "Sandro", "Masho"];
const lowerCased = userNames.map( userNames => userNames.toLowerCase());
console.log(lowerCased);


//problem8

const capitalized = userNames.map(userNames => {
const firstLetter = userNames.charAt(0).toUpperCase();
const rest = userNames.slice(1).toLowerCase();
return firstLetter + rest; });
console.log(capitalized);


//problem9

const surNames = ["makhniashvili", "khachidze", "makharadze", "datiashvili", "nanobashvili", "gogoladze", "chkhaidze", "maisuradze", "lomidze", "khuchua"];
const upperCased = surNames.map(surNames => surNames.toUpperCase());
console.log(upperCased);


//problem10


let firstNames = ["Lasha", "Saba", "Keta", "Anna", "Zura", "Mariami", "Nino", "Gigi", "Sandro", "Masho"];
let lastNames = ["Makhniashvili", "Khachidze", "Makharadze", "Datiashvili", "Nanobashvili", "Gogoladze", "Chkhaidze", "Maisuradze", "Lomidze", "Khuchua"];
let users = [];
for (let i = 0; i <10 ; i++) {
let fullName = firstNames[i] + " " + lastNames[i];
console.log(fullName)};


//problem11