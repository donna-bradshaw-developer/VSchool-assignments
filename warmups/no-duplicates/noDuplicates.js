/*
Given a string, your task is to remove any duplicate letters. Any letters removed should be added to another string called "duplicates".

Create function that accepts a string.
Create variable that stores the string without duplicates.
Create a variable that stores the letters removed.
Have the function return the string without duplicate letters
Have the string return the letters removed.

Create a function that randomly removes a letter.
Create a function that scrambles the original string.
Create a function using regular expressions that remove all vowels.
*/

function noDuplicates (str){
    let noDupes = "";
    let extras = "";
    for (i = 0; i < str.length; i++){
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            noDupes = noDupes.concat(str[i]) 
        } else{
        extras = extras.concat(str[i])
        }
    }
    console.log(noDupes)
    console.log(extras)
}

noDuplicates("say what you want to say")

function ranRemove(str){
    let randomRem = Math.floor(Math.random() * str.length)
    const randomOutput = str.replace(str[randomRem], "")
    console.log(randomOutput)
}

ranRemove("say what you want to say")

function scrambles(str){
    const scramArr = str.split("");
    
    for(var i = scramArr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); 
        const placeHolder = scramArr[i];
        scramArr[i] = scramArr[randomIndex];
        scramArr[randomIndex] = placeHolder;
    }
        console.log(scramArr.join(""))
}

scrambles("say what you want to say")

function noVowels(str){
    let removeVows = str.replace(/[aeiou]/gi, "");
    console.log (removeVows)
}

noVowels("say what you want to say")

