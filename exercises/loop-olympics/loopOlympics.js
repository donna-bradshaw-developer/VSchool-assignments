/*
Preliminaries
Write a for loop that prints to the console the numbers 0 through 9.

// for (i = 0; i < 10; i++){
//     console.log (i)
// }

Write a for loop that prints to the console 9 through 0.

// for (i = 9; i >= 0; i--){
//     console.log (i)
// }

Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]
*/
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++){
//     console.log (fruit[i])
// }

/*
Bronze Medal
Write a for loop that will push the numbers 0 through 9 to an array.
*/

const underTen = []

for (i = 0; i < 10; i++){
    underTen.push(i)
}

console.log(underTen)

// Write a for loop that prints to the console only even numbers 0 through 100.

for (i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log (i)
    }
}

/* Write a for loop that will push every other fruit to an array.
var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
*/

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const newFruits =[]

for (i = 0; i < fruits.length; i++){
    if (i % 2 === 0){
        newFruits.push(fruits[i])
    }
}

console.log (newFruits)


//Silver Medal

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//Write a for loop that will print out all the names of the people of the people array

const eachName = arr => {
    let names = [];
    for (i = 0; i < arr.length; i++){
        names = arr[i].name;
        console.log (names)
    }
}
eachName(peopleArray)

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

const separatedData = arr => {
    let names = [];
    let occupations= []
    for (i = 0; i < arr.length; i++){
        names.push(arr[i].name) 
    }
    console.log (names);

    for (j = 0; j < arr.length; j++){
    occupations.push(arr[j].occupation)
    }
    console.log (occupations);
}
separatedData(peopleArray)

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

let everyOtherName = [];
let everyOtherOccupation = [];

for (i = 0; i < peopleArray.length; i++){
        if (i % 2 === 0){
            everyOtherName.push(peopleArray[i].name)
        }
    }
console.log (everyOtherName)

for (j = 1; j < peopleArray.length; j++){
    if (j % 2 !== 0){
        everyOtherOccupation.push(peopleArray[j].occupation)
    }
}
console.log (everyOtherOccupation)

/*
Gold Medal
Create an array that mimics a grid like the following using for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]
*/

let zeroGrid = [];
let zeroRow = [];
for (i = 0; i < 3; i++){
    zeroRow.push(0);
    zeroGrid.push(zeroRow);
}

console.log(zeroGrid)

/*2.Create an array that mimics a grid like the following using for loops:
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
*/

let numberGrid = [];
let sameNumber;
for (i = 0; i < 3; i++){
    sameNumber = [`${i}, ${i}, ${i}`];
    numberGrid.push(sameNumber);
}
console.log(numberGrid)

/*3.Create an array that mimics a grid like the following using for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
*/

let sequenceGrid = [];
let sequenceRow = [];
for (i = 0; i < 3; i++){
    sequenceRow.push(i);
    sequenceGrid.push(sequenceRow);
}


console.log(sequenceGrid)






