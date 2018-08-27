let removeA = function(str) {
    const removed = str.split(/a/gi);
    const strAgain = removed.join("")
    console.log (strAgain)
}

removeA("A home away from home always")