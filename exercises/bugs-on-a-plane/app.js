var form = document.getElementById("airlineForm");
var submit = document.getElementById("submit");
var query = document.querySelector;
console.log(submit);
function formAlert() {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travelLocation"].value;
    var diet = [];
    if (form.elements['vegan'].checked === true) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked === true) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked === true) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener("submit", formAlert);