// Write a function that accepts two numbers as parameters, and returns the sum.

function sumOfTwo( a, b ){
    return a + b
}

console.log (sumOfTwo(237, 538))

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestOfThree( a, b, c ){
    if ((a > b && a > c) || (a === b && a > c)){
        return a
    } else if ((b > a && b > c) || (b === c && b > a)){
        return b
    } else if (a === b === c){
        return "they are equal"
    } else{
        return c
    }
}

console.log (largestOfThree(10, 10, 9))
console.log (largestOfThree(13, 9, 13))
console.log (largestOfThree(10, 11, 9))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd(a){
    if (a % 2 === 0){
        return "even"
    } else {
        return "odd"
    } 
}

console.log (evenOrOdd(45))
console.log (evenOrOdd(24))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.


function charLength (str) {
    if(str.length <= 20){
        return str.concat(" ", str)
    }else{
        return str.slice(0, (str.length/2))
    }
}

console.log(charLength("please excuse my dear"))
console.log(charLength("pizza"))


// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

function fibonacci (n){
    const series = [0, 1];;
    let sum; 
    for (i=2; i < n; i++){
        series.push((series[i-1] + series[i-2]))
    }
    console.log (series)
    sum = series.reduce(function(final, num){
        return final + num
    })
    return sum 
}

console.log (fibonacci(7))

// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

function quadriatic (a, b, c){
    let firstX  = (-b + Math.sqrt((Math.pow(b, b) - (4 * a * c)))) / (2 * a)
    let secondX = (-b - Math.sqrt((Math.pow(b, b) - (4 * a * c)))) / (2 * a)
    return [firstX, secondX]
}

 console.log (quadriatic (2, 4, 3))

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

function mostFrequent (str){
    const countObj = {}
    const noSpace = str.replace(/\s/g, '')
    for (i = 0; i < noSpace.length; i++){
        const freq = noSpace.length - (noSpace.split(noSpace[i]).join('').length)
        if(!countObj[noSpace[i]]){
            countObj[noSpace[i]] = freq
        }   
    }
    const countArr = Object.entries(countObj)
    countArr.sort(function(a, b) {
        return b[1] - a[1];
    })
    console.log(countArr)
    console.log(countArr[0][0])
}

mostFrequent('nothing but love my love')