var shopper = {  
    fullName: "Susan Meyers",
    householdSize: "1",
    isVegan: false,
    isVegetarian: false,
    groceryCart: ["eggs", "milk", "butter", "honey", "cereal"],
    currentPoints: 7000,
    valuedCustomer: function(){
        (currentPoints > 7500) ? console.log ("Gold Member") : (currentPoints > 5000) ? console.log("Silver Member") : (currentPoints > 2500) ? console.log ("Bronze Member") : console.log ("Standard Member");
    }
 }

 