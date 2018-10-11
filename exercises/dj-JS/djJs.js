const display = document.getElementById('square')

document.getElementById("square").addEventListener("mouseover", movement)
document.getElementById("square").addEventListener("mousedown", movement)
document.getElementById("square").addEventListener("mouseup", movement)
document.getElementById("square").addEventListener("dblclick", movement)
window.addEventListener("keydown", keypress)
window.addEventListener("scroll", movement)

function keypress(){
    switch(event.keyCode){
        case 66:
            document.getElementById('square').style.backgroundColor = "blue";
            document.getElementById('square').style.color = "white";
        break;

        case 82:
            document.getElementById('square').style.backgroundColor = "red";
            document.getElementById('square').style.color = "white";
        break;

        case 89:
            document.getElementById('square').style.backgroundColor = "yellow";
            document.getElementById('square').style.color = "";
        break;

        case 71:
            document.getElementById('square').style.backgroundColor = "green";
            document.getElementById('square').style.color = "white";
        break;

        case 79:
            document.getElementById('square').style.backgroundColor = "orange";
            document.getElementById('square').style.color = "";
        break;

        default:
            document.getElementById('square').style.backgroundColor = "";
    }
}

function movement(){

    switch (event.type){
        case "mouseover": 
            document.getElementById('square').style.backgroundColor = "blue";
            document.getElementById('square').style.color = "white";
        break;

        case "mousedown":
            document.getElementById('square').style.backgroundColor = "red";
            document.getElementById('square').style.color = "white";
        break;

        case "mouseup":
            document.getElementById('square').style.backgroundColor = "yellow";
            document.getElementById('square').style.color = "";
        break;

        case "dblclick":
            document.getElementById('square').style.backgroundColor = "green";
            document.getElementById('square').style.color = "white";
        break;

        case "scroll":
            document.getElementById('square').style.backgroundColor = "orange";
            document.getElementById('square').style.color = "";
        break;

        default:
            document.getElementById('square').style.backgroundColor = "";
    }
}