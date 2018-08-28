/*
Create a new JavaScript file and put these two arrays at the beginning. You will perform operations with them.
If you've done everything correctly, the last step should print the following to the console:

3,pepper,1,watermelon,orange,apple

Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array. Log that to the console.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Log your array as a string to the console.
*/

const fruits = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function result(){
    vegetables.pop();
    fruits.shift();
    fruits.push(fruits.indexOf("orange"))
    console.log(vegetables.length)
    vegetables.push(vegetables.length)
    const food = fruits.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    console.log(food.join())
}

result()