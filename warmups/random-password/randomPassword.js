/*
Write a function that generates a random password.

The function should accept an argument that dictates the password's length.
The function may contain any upper and lower case characters.
The function may contain any numbers and symbols.

Optional:

The password gives no preference to any character, number, or symbol.
The password also accepts a string, whose characters are all found within the generated password.

Password is 16 characters or less
*/

function randomPassword(param){
    let codes = []
    let password = ""
    if(typeof param === "number"){
        if(0 < param <= 16){
            for(i = 0; i < param; i++){
                let randomChar = Math.floor(Math.random() * (224)) + 33;
                password += String.fromCharCode(randomChar)
            }
            return password
        }else{
            return "Number needs to be between 1 and 16."
        }
       
    } else if (typeof param === "string"){
        if(0 < param < 9){
            for (i = 0; i < param.length; i++){
                codes.push(param.charCodeAt(i))
                let randomChar = Math.floor(Math.random() * (224)) + 33;
                codes.push(randomChar)
                codes.sort((a, b) => {
                    return a-b
                })
            }
            codes.map(num => {
                password += String.fromCharCode(num)
            })
            return password
            
        } else{
            return "String needs to be 8 characters or less"
        }
            
    } else{
        return "Strings or numbers only"
    }
}

console.log(randomPassword("love"))