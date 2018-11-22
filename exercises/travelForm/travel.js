const form = document.travelForm

function passengerInfo(){
    const displayInfo = {}
    const restrictions = []
    let checkedBoxes = document.querySelectorAll("input[name=dietary]:checked");

    for(let i=0; i < checkedBoxes.length; i++){
        restrictions.push(checkedBoxes[i].value)
    }

    const restrictionString = restrictions.join(", ")

    displayInfo["First Name"] = form.firstName.value
    displayInfo["Last Name"] = form.lastName.value
    displayInfo["Age"] = form.passengerAge.value
    displayInfo["Gender"] = form.gender.value
    displayInfo["Location"] = form.location.value
    displayInfo["Dietary Restrictions"] = restrictionString

    alert(`    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.passengerAge.value}
    Gender: ${form.gender.value}
    Location: ${form.location.value}
    Dietary Restrictions: ${restrictionString}`)
}

form.addEventListener("submit", e =>{
    e.preventDefault()
    passengerInfo()
})