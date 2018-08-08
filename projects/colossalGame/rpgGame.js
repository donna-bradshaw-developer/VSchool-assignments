var readlineSync = require ("readline-sync");

// >>>>>>>>>>     VARIABLES  &  OBJECTS     >>>>>>>>>>

var user = {
    name:"",
    attack: 0,
    health:100,
    collection: []
};

var enemy = {
    chosen: "",
    attack: 0,
    health: 100,
    name: ["html-Boar", "css-Leopard", "javascript-Demon"]
};

//the fight function is nested in the continue2 function
var fight = function(){

    while (user.health > 0 && enemy.health > 0){

        user.attack = (Math.floor(Math.random() * Math.floor(6)))*20;

        enemy.attack = (Math.floor(Math.random() * Math.floor(6)))*20;

        console.log ("\nYour attack power is " + user.attack + " points! Strike now!\nThe enemy attack is  " + enemy.attack + " points!");

        console.log ("\n||||||||||  ||||||||||     |||||||    ||||   ||||  ||||||||||   ||||\n||||||||||  ||||||||||    |||||||||   ||||   ||||  ||||||||||   ||||\n||||           ||||      ||||         ||||   ||||     ||||      ||||\n||||           ||||      ||||         ||||   ||||     ||||      ||||\n||||||||||     ||||      ||||         |||||||||||     ||||      ||||\n||||||||||     ||||      ||||  |||||  |||||||||||     ||||      ||||\n||||           ||||      ||||  |||||  ||||   ||||     ||||      ||||\n||||           ||||      ||||   ||||  ||||   ||||     ||||      ||||\n||||           ||||      ||||   ||||  ||||   ||||     ||||\n||||        ||||||||||    |||||||||   ||||   ||||     ||||      ||||\n||||        ||||||||||     |||||||    ||||   ||||     ||||      ||||\n");

        user.health -= enemy.attack;

        enemy.health -= user.attack;

        console.log ("Your health is " + user.health + " points. The enemy's health is " + enemy.health + " points.");
      
    };

    if (user.health > 0){

        user.health += 20;

        enemy.health = 100;

        console.log ("You killed the enemy. A special prizes await!")

        var inventory = {
            boar: ["headers", "divs", "id and class tags", " html spell gems"],
            leopard: ["margins", "flexbox", "color coins", "css spell gems"],
            demon: ["extra loops", "event listeners", "automatic code bomb", "javascript spell gems"]
        };

        var randomPrize = "";

        if  (enemy.chosen === enemy.name[0]){
            
            randomPrize = Math.floor(Math.random() * inventory.boar.length);

            user.collection.push(inventory.boar[randomPrize]);

        }  else if (enemy.chosen === enemy.name[1]){

            randomPrize = Math.floor(Math.random() * inventory.leopard.length);

            user.collection.push(inventory.leopard[randomPrize]);

        } else {

            randomPrize = Math.floor(Math.random()*inventory.demon.length);

            user.collection.push(inventory.demon[randomPrize]);

        };

        console.log ("Here is your inventory: " + user.collection);
        
    } else {
        
        deathMessage();

    }
}

//the escape function is nested in the continue2 function
var escape = function (){
    var live = Math.floor(Math.random() * Math.floor(2));

    enemy.attack = (Math.floor(Math.random() * Math.floor(6)))*20;

    user.health -= enemy.attack;

    console.log ("\nThe enemy is attacking!")

    if (live === 0 && user.health > 0){
        
        console.log ("You escaped! Boy that was close!\nYour health is: " + user.health);

    }else {

        deathMessage();
    };
};

//this function is nested in the ifEnemyAppear function
var whichEnemyAppear = function (){
    enemy.chosen = "";

    var whichOne = Math.floor(Math.random() * Math.floor(3));
    
    (whichOne === 0) ? enemy.chosen = enemy.name[0] : (whichOne === 1) ? enemy.chosen = enemy.name[1] : enemy.chosen = enemy.name[2];
    
    console.log ("It is the " + enemy.chosen + " up ahead. You must do something!\n");
};

//the continue2 is nested in the ifEnemyAppear function
var continue2 = function (){

    var statsOptions

    var stats = readlineSync.question("Do you wish to view your stats? Type 'print' to view them or 'no to continue. After you make your selection, then press enter  ", {limit: ['print', 'no']});

        if(stats === 'print'){
            
            console.log ("Player Name: " + user.name + ", Player Health: " + user.health + " points, Player Inventory: " + user.collection);
        }

    var options2 = ["r", "a"];

    var choice = readlineSync.keyIn("How do you wish to continue against your enemy? Choose 'r' to run or 'a' to attack. ", {limit: 'ra'});

        if(choice === options2[0]){
            console.log('\nOkay, RUN! I hope you got a good set of legs and a lot of energy!\n');

            escape();

        }else{
            console.log("Since you are going to fight, STAND YOUR GROUND. Otherwise, you will die!\n");

            fight();

        };
};

//ifEnemyAppear function is nested in the walk function
var ifEnemyAppear = function (){
    var showsUp = Math.floor(Math.random() * Math.floor(4));

    var userIfNumPick = readlineSync.keyIn('Pick a number (0, 1, 2, or 3) and pick well. It is the only way to escape Hell!\n', {limit: '$<0-3>'});

    if (showsUp == userIfNumPick){

        console.log ("A foe is coming!\n");

        whichEnemyAppear();

        continue2();
    } else {

        user.health += 20;

        console.log ("\nEverything is going according to the plan. We should get there in no time You have gained 20 health points.\n")
    };
};

// >>>>>>>>>>     FUNCTIONS     <<<<<<<<<<

function walk(){
    while(user.health > 0){
        ifEnemyAppear();
        user.health -= 1;
    };
};

function deathMessage(){
    user.health = 0;
    console.log (">>>>>>>>>>>>>>>>>>>>\n\nDearly Beloved. We are gathered here today to remember the life of " + user.name + "!\n\nSorry. GAME OVER!\n\n<<<<<<<<<<<<<<<<<<<<");
};

function endGame(){
    user.health = 0;
    console.log ("\nYou have chosen to end this game.\nGoodbye!")
};

var continue1 = function (){
    var options1 = ['w', 'e'];
    userSelect = readlineSync.keyIn("\nTo start hit 'w' so we can begin walking; otherwise hit 'e' to end game. ", {limit: 'we'});
        if (userSelect === options1[0]){
            console.log("\nHi ' " + user.name + "! I am glad you decided to continue this journey with us.\nI must warn you though. Be prepared for some unfriendlies!\n");

            walk();

        } else{
            endGame();
        };
};


// >>>>>>>>>>     THE GAME     <<<<<<<<<<

console.log("Hi VSchool Pioneer. Welcome to your journey into the land of Software Engineering.\nYou are about to embark on a rewarding adventure. \nMake it to the end and I'll see you again!\n");

var player = readlineSync.question("May I have your name? ");
    user.name = player;
    
console.log("\nHi " + player + "! Let's Begin!");

continue1();

// everything works above this line ... YAY!