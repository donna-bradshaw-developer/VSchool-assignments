/*Loop through the following array and count how many "computers" there are. Log the final count;*/

const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

const computerFreq = arr => {
   return arr.reduce((final, elem) => {
        if(elem === "computer"){
            final++;
        }
        return final
    }, 0)
}

console.log (computerFreq(officeItems))

/*Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18. 
// Bonus - Log to the console a personalized message like:

Mike is not old enough to see Mad Max

or

Madeline is old enough to see Mad Max.

Check to see if the movie goer is a male or female for an even more personalized message.

Mike is not old enough to see Mad Max Fury Road, don't let HIM in.

or

Madeline is old enough. SHE'S good to see Mad Max Fury Road.

*/

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  const isOldEnough = arr => {
    return arr.map(elem => {
        if(elem.age > 18){
            if(elem.gender === "male"){
                return `${elem.name} is old enough. He is permitted to see the movie. `
            }else{
                return `${elem.name} is old enough. She is permitted to see the movie.`
            }
        }else{
            if(elem.gender === "male"){
                return `${elem.name} is not old enough. He is not permitted to see the movie. `
            }else{
                return `${elem.name} is not old enough. She is not permitted to see the movie.`
            }
        }
    })
  }


  console.log (isOldEnough(peopleWhoWantToSeeMadMaxFuryRoad))

