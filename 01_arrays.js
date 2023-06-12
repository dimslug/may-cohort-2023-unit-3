/*
!   Arrays
    - denoted with suqare brackets [   ]
    - indices start at zero

*/

let list = ['milk', 'bread', 'chicken', 'coffee'];
//              1       2       3           4

console.log(list[2]);
list[0] = 'chocolate milk';
console.log(list);

let avengers = [
    "Nick", 2, false, "Steve", "Bruce",
    ['Tony', 8, true]
];

console.log(typeof avengers);
console.group(avengers instanceof Array);

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]}`);
console.log(`Hello ${avengers[5][0]}`);



//! Methods
//* .push() - ADDS our value to the ENDS of the array
let food = [
    'Pecan Pie', "Shrimp", "Quesadilla", "Cheese cake", "Hot dog"
];


for (item of food) {
    console.log(item);
}

food.push("pizza");
console.log(`Push: ${food}`);

//* .splice() - can REMOVE and/or INSERT at specific locations
// takes in 3 requirements - .splice(position, number to remove, new info)
food.splice(1, 1, "Tacos");
console.log(`Splice 1: ${food}`);

food.splice(1, 0, "Steak");
console.log(`Splice 2; ${food}`);

//* .pop() - REMOVE from the ends of any array
food.pop();
console.log(`Pop: ${food}`);


//* .shift() - REMOVES the first item in an array
food.shift();
console.log(`Shift: ${food}`);

//* .unshift() - ADD new value to array
food.unshift("Hamburger", "Salad");
console.log(`Unshift: ${food}`);

//* .length - returns a numeric value of how many items are IN the array

let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(count.length);
console.log(count[9])
console.log(count[count.length - 1]);


//! Iteration Methods

/* 
    .filter() & .includes()
    - does not destroy the original array
    - stores the filter array in a new variable
    - takes a callback function that returns either true / false
    - loops through an array
    - MUST have a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

// How can i use a .filter to remove the mango 
const filteredFruit = fruits.filter(fruit => {
    let result = fruit !== 'mango';
    return result;
});

console.log(filteredFruit);

let newArray = [1, 2, 3, 4];
let even = newArray.filter(evenFunction);

function evenFunction(num) {
    let evenNumber = num % 2 == 0;
    return evenNumber;
};

let checkNumber = evenFunction(8);

console.log(even);
console.log(checkNumber);

let fruits2 = ['apple', 'pear', 'mango', 'orange', 'pineapple'];
// remove any fruit that has the word "apple" in it?

let checkFruit = 'pineapple';
console.log(checkFruit.includes("apple")); // returns a boolean

const filterNewFruits = fruits2.filter(fruit => !fruit.includes('apple'));
console.log(filterNewFruits);

let people = ['Bob', 'Jane', "Jack", "Barbara", "Ruby"];
const checkNames = people.filter(n => n.includes("B"));
console.log(checkNames);

// .forEach()

/*
    - It runs three arguments
        - The Value
        - The Index
        - The array object itself
*/

let letters = ['a', 'b', 'c', 'd'];
// for(let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// };

letters.forEach(x => console.log("For Each ", x));
letters.forEach((x, i) => console.log("For Each: ", x, i));


//* .find()

let tmnt = [
    'Mikey', "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"
];

let character = "Leo";
console.log("Find: ", tmnt.find(c => c == character));

character = "April";
console.log("Find: ", tmnt.find(c => c == character));

character = "Splinter";
tmnt.find((c, i) => console.log(c == character, "index; ", i));

let leader = tmnt.find((c, i) => {
    if (c == character) {
        return tmnt[i]
    }
});

console.log('leader: ', leader);

//* .map()

let numArray = [];
let fizzBuzzArray = [];

for (let i = 0; i < 101; i++) numArray.push(i);
console.log(numArray);

numArray.map(x => {
    if (x % 15 === 0) fizzBuzzArray.push(x);
});

//! Destructuring, Spread, and Rest

const fullName = ["Jane", "Doe"];
// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(`${firstName} ${lastName}`);

const [firstName, lastName] = fullName;
console.log(`After Destructure: ${firstName} ${lastName}`);

/*
    -pulls the values from the variable array.
        - const fullName
    - stores based off their original position
        - [ one, two ]
        - [ "Jane", "Doe"]
*/

//? Spread Operator

/*
    denoted with "..."
    - pulls out all elements of an array and give them to you as a standalone list of elements.

*/

const copiedFullName = [...fullName];
console.log(`Spread: ${copiedFullName}`);
const copiedFullName2 = [fullName]; // nests an array withing this array
console.log(`Not Spread : ${copiedFullName2}`);

//* with Numbers
console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.95];
console.log(Math.min(prices)); // NaN
console.log(Math.min(...prices));

// anytime that you are working with a function / method that requires standalone values, spread operator helps get these values out of an array.

//? Rest Operator
const newFullName = ['Jane', 'Done', 'Mrs.', { month: 3, date: 22, year: 1973 }];

const [fName, lName, ...otherInfo] = newFullName;
console.log(fName);
console.log(lName);
console.log(otherInfo);
newFullName.push('testOne', 2, false, true);
const [first, last, , , , ...testData] = newFullName;
console.log(first, last, testData);
// MUST be the last element

console.log(first);
console.log(fName);

const veggies = ['potato', 'lettuce', 'onion', 'leeks'];
const [plant1, , ...otherPlants] = veggies;
console.log(plant1, otherPlants);
console.log(otherPlants[1]);
otherPlants.push('lettuce');
console.log(otherPlants);
console.log(veggies);