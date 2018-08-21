/*Preliminaries
Write an if statement that prints "is greater than" if 5 is greater than 3*/

const number = 5;
if (number < 3){
    console.log ("This is so not true");
} else {
    console.log (`${number} is greater than 3`);
}

/*Write an if statement that prints "is the length" if the length of "cat" is 3*/

const animal = "cat";
if (animal.length === 3){
    console.log (`It is the length of ${animal}`);
} else {
    console.log (`It is not the length of ${animal}`);
}


/*Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.*/

const animal1 = "cat";
const animal2 = "dog";
if (animal1 === animal2){
    console.log ("These are the same!")
} else {
    console.log (`${animal1} and ${animal2} are not the same.`)
}

/*Bronze Medal
Write an if statement that prints <theNameOfThePerson> + is allowed to go to the movie if they are old enough, and the opposite if they are not older than 18.*/

const person = {  
    name: "Bobby",
    age: 12
};

if (person.age > 18){
    console.log(`${person.name} is allowed to go to the movie!`);
}else {
    console.log(`${person.name} is not allowed to go to the movie!`);
}

// Using that same object, only allow them into the movie if their name starts with "B"

if (person.name[0] === "b" || person.name[0] === "B"){
    console.log(`${person.name} is allowed to go to the movie!`);
}else {
    console.log(`${person.name} is not allowed to go to the movie!`);
}

// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if (person.name[0] === "b" || person.name[0] === "B" && person.age > 18){
    console.log(`${person.name} is allowed to go to the movie!`);
}else {
    console.log(`${person.name} is not allowed to go to the movie!`);
}

// Silver Medal
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if (1 === "1"){
        console.log("strict");
    }else if(1 == "1"){
        console.log("loose");
    }else{
        console.log("not equal at all")
    }

// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!!

// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if (3 * 4 > 10 && 5 + 10 > 10){
    console.log("yes");
}else{
    console.log("not equal at all")
}


// Gold Medal
// 1. Write an if statement that checks to see if "dog" is a string 

if (typeof "dog" === "string"){
    console.log('yes')
}else{
    console.log('no')
}

// 2. Write an if statement that checks to see if "true" is a boolean 

if (typeof true === "boolean"){
    console.log('yes')
}else{
    console.log('no')
}

if (typeof "true" === "boolean"){
    console.log('yes')
}else{
    console.log('no')
}

// 3. Write an if statement that checks to see if a variable has been defined or not 
let water;
let friend = "Natasha";

const checker = elem => {
    if (typeof elem === "undefined"){
        console.log('undefined');
    }else{
        console.log(typeof elem)
    }
}

checker(friend);
checker(water);

// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12? 

let a = "n";
let b = 6;

if (typeof a === 'string' && a[1] === undefined){
    var aStr = a;
} else if (typeof a === 'number'){
    var aStr = `${a}`
}else {
    console.log (" 'a' is not a letter or a number")
}

if(typeof b === 'string' && b[1] === undefined){
    var bStr = b;
} else if (typeof b === 'number'){
    var bStr = `${b}`
}else {
    console.log (" 'b' is not a letter or a number")
}

if (aStr.charCodeAt(0) > bStr.charCodeAt(0)){
    console.log ('a character code is greater than b character code')
}else if (aStr.charCodeAt(0) < bStr.charCodeAt(0)){
    console.log ('a character code is less than b character code')
}else if (aStr.charCodeAt(0) === bStr.charCodeAt(0)){
    console.log ('a character code is equal to b character code')
}else{
    console.log ("can't be determined")
}


// 5. Write a ternary statement that console.logs whether a number is odd or even. // Write your ternary here to log if `myNum` is odd or even. (It should continue to work correctly even if myNum changes to a different number) For example:

const checkNum = (num) => (num % 2 === 0) ? console.log('number is even') : console.log('number is odd');

checkNum(10);
checkNum(15);
