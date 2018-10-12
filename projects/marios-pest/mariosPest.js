const goombaCost = document.getElementById("goombaCost");
const bobombCost = document.getElementById("bobombCost");
const cheepCost = document.getElementById("cheepCost");
const totalCost = document.getElementById("totalCost");

const goomba = function(){
    let goombaTotal = "";
    goombaTotal =  Number(document.pests.goombaNumber.value) * 5;
    goombaCost.innerHTML = goombaTotal;
    return goombaTotal
};

const bobomb =function(){
    let bobombTotal = "";
    bobombTotal =  Number(document.pests.bobombsNumber.value) * 7;
    bobombCost.textContent = bobombTotal;
    return bobombTotal
};

const cheeps = function(){
    let cheepTotal = "";
    cheepTotal =  Number(document.pests.cheepsNumber.value) * 11;
    cheepCost.textContent = cheepTotal;
    return cheepTotal
};

const pestCost = function(){
    let cost ="";
    cost = goomba() + bobomb() + cheeps();
    totalCost.textContent = cost + " coins";
}

document.pests.addEventListener("submit", function(event){
    event.preventDefault();
    pestCost();
});