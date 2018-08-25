var x = 1;

var fizzbuzzArr = [];

var fizzbuzz = function (){
   while (x <= 100) {
   (x % 3 === 0 && x % 5 === 0) ? fizzbuzzArr.push ("fizzbuzz") : (x % 3 === 0) ? fizzbuzzArr.push("fizz") : (x % 5 === 0) ? fizzbuzzArr.push("buzz") : fizzbuzzArr.push(x);
       x++;
   }
   return fizzbuzzArr
}

fizzbuzz();