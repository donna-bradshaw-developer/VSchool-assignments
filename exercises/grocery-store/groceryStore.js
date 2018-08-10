var shopper = {  
    fullName: "Susan Meyers",
    householdSize: "1",
    isVegan: false,
    isVegetarian: false,
    groceryCart: ["eggs", "milk", "butter", "honey", "cereal"],
    currentPoints: 7000,
    valuedCustomer: function(){
        (this.currentPoints > 7500) ? console.log ("Gold Member") : (this.currentPoints > 5000) ? console.log("Silver Member") : (this.currentPoints > 2500) ? console.log ("Bronze Member") : console.log ("Standard Member");
    }
 }


