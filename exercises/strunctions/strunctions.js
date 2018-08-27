/*
Implement all of the listed String Methods below using at least 3 unique Functions.

String Methods

.concat()--
.indexOf()
.lastIndexOf()
.match()
.replace()
.slice()
.split()
.toLowerCase()
.toUpperCase()
.substr()-------
*/

function quoteRemix1 (str){
    const sayItLoud = str.toUpperCase();
    const singleWord = sayItLoud.slice(2, 9)
    console.log(singleWord)
    const splitQuote = sayItLoud.split(" ");
    console.log(splitQuote)
}

function quoteRemix2 (str){
    const killThemSoftly = str.toLowerCase();
    const changeItUp = killThemSoftly.replace('hate', 'love');
    console.log (changeItUp);
    const theWord = changeItUp.match(/love/g);
    console.log(theWord)
}

function quoteRemix3 (str){
    const firstLetter = str.indexOf("g");
    const lastLetter = str.lastIndexOf("d")
    const word = str.substr(63, 4);
    const word2 = str.substr(20, 5)
    const putItTogether = word2.concat(` is ${word}!`)
    console.log(putItTogether)
}


console.log(quoteRemix1("Injustice anywhere is a threat to justice everywhere."));
console.log(quoteRemix2("SOME PEOPLE THINK HATE IS THE ONLY ANSWER. I TELL THEM EVERYONE SHOULD THINK LOVE IS THE ONLY ANSWER."))
console.log(quoteRemix3("Don't underestimate peace. It is medicine to the mind like the golden rays of the sun."))