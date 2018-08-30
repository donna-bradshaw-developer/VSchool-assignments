/*
Create a function called createEvenArray. It will have 1 parameter called highestNum where you will pass in the highest number that you want to create even numbers up to. Create a for loop inside that function that pushes all even numbers up to that highest number to that array. The function should return that array. Do not include the number 0
*/

const evenArray = []

function createEvenArray(highestNum){
    for (let i = 0; i <= highestNum; i++){
       if (i % 2 === 0 && i !== 0){
            evenArray.push(i)
        }
    }
    return evenArray;
}

console.log(createEvenArray(20))

/*
Create a second function called addOdds that takes 1 parameter of type Array, call it evensOnlyArray. This function will iterate through that array (we are assuming that the array is all evens), examine each number, and then add the next odd number at the end of the array.

Extra Credit
Have the addOdds function support adding the number 1 into the array if the evens array starts at 2
*/

function addOdds(evensOnlyArray){
    const evensAndOdds = evensOnlyArray
    evensAndOdds.map(elem => {
        if (elem % 2 === 0){
            evensAndOdds.push(elem + 1)
        }
    })
    if (evensAndOdds[0] === 2){
        evensAndOdds.unshift(1)
    }
    return evensAndOdds
}

console.log (addOdds(evenArray))

/*
The next part is to use this sorting function to sort the entire array from smallest to largest:
*/

function sortArray(arr){
    return arr.sort((a, b) => {
        return a-b
    })
}

console.log(sortArray(evenArray))