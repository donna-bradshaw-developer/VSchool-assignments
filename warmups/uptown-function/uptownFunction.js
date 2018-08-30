
// Create three functions with the provided array.

const lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

// First function: Prints the array, lyrics, to the console, including necessary spaces.
const lyricsWithoutArr = arr => {
   console.log (arr.join(" "))
}

lyricsWithoutArr(lyrics)

// Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta", ...).
const lyricsReverse = arr => {
    const reverse = arr.reverse();
    console.log (reverse.join(" "));
}

lyricsReverse(lyrics)

// Third function: Prints every other word to the console, (e.g. "this that cold Pfeiffer" ...).
const everyOther = arr => {
    let array = []
    for (i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            array.push(arr[i])
        }
    }
    array = array.join(" ")
    console.log(array)
}

everyOther(lyrics)

// Optional Challenge

// Fourth function: Prints all of lyrics, but every two words are switched ( "hit This ice that Michelle cold" ...).

const everyTwoSwitched = arr => {
    let array = [];
    let switched = []

    for (i = 0; i < arr.length; i += 2){
        if (i % 2 === 0){
            array.push(arr[i + 1], arr[i])
            if(arr[i + 1] === undefined){
                array.push(arr[i]);
                break;
            } 
            if (arr[i + 2] === undefined){
            break;
            }
        }
    }
    switched = array.join(" ")
    
    console.log (switched)
}

everyTwoSwitched(lyrics)

// Fifth function: Prints lyrics in a random order.

const randomLyrics = arr => {
    let random = []
    
    for(let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); 
        const placeHolder = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = placeHolder;
    }
        random = arr.join(" ")
        console.log(random)
}

randomLyrics(lyrics)

