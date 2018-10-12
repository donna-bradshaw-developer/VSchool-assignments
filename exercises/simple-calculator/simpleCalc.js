const subAnswer = document.getElementById("subAnswer");
const addAnswer = document.getElementById("addAnswer");
const multiAnswer = document.getElementById("multiAnswer");
const divideAnswer = document.getElementById("divideAnswer");

const subResult = function(){
    let subInfo = "";
    subInfo = Number(document.getElementById("subtr1").value) - Number(document.getElementById("subtr2").value);
    subAnswer.textContent = subInfo;
}

const addResult = function(){
    let addInfo = "";
    addInfo = Number(document.getElementById("add1").value) + Number(document.getElementById("add2").value);
    addAnswer.textContent = addInfo;
}

const multiResult = function(){
    let multiInfo = "";
    multiInfo = Number(document.getElementById("multi1").value) * Number(document.getElementById("multi2").value);
    multiAnswer.textContent = multiInfo;
}

const divideResult = function(){
    let divideInfo = "";
    divideInfo = Number(document.getElementById("divide1").value) * Number(document.getElementById("divide2").value);
    divideAnswer.textContent = divideInfo;
}

document.getElementById("subButton").addEventListener("click", subResult);
document.getElementById("addButton").addEventListener("click", addResult);
document.getElementById("multiButton").addEventListener("click", multiResult);
document.getElementById("divideButton").addEventListener("click", divideResult);