//variables choosing points to win round
var pointChoice = 0;
const threePoint = 3;
const fivePoint = 5;
const tenPoint = 10;

//variable choices (objects) in game
const choiceObjects = [
    {
        name: "rock",
        beats1: "scissors", 
        beats2:"lizard",
    },
    {
        name: "paper",
        beats1: "rock", 
        beats2:"spock"
    },
    {
        name: "scissors",
        beats1: "paper", 
        beats2: "lizard",
    },
    {
        name: "lizard",
        beats1: "spock", 
        beats2: "paper",
    },
    {
        name: "spock",
        beats1: "scissors", 
        beats2: "rock",
    }
];

//variable running game
let randomNumber = 0;
let compPoints = 0;
let youPoints = 0;
let compPointsElement = document.getElementById("comp-point");
let youPointsElement = document.getElementById("you-point");
let roundAnouncement = document.getElementById("who-won");
let resultGameDisplay = document.getElementById("result-game-display");
let choicePointDisplay = document.getElementById("choice-point-display");
let resultGame = document.getElementById("who-won-game");
let compChoice = "scissors";
var statusGame = 0;

//variable button clicks
const newGame = "new game";
const toGame = "to game";
const computerWin = "computer win";
const youWin = "you win"; 


//choosing points needed to win
function choosePointAmount(chosenElement) {
    pointChoice = chosenElement;
    console.log(pointChoice);
    compPoints = 0;
    youPoints = 0;
    compPointsElement.innerHTML = `Computer points: ${compPoints}`;
    youPointsElement.innerHTML = `Your points: ${youPoints}`;
}

//checking if the user chose a point amount
function checkingPointChoice() {
    if (pointChoice == 0) {
        pointChoice = 3;
    }
}

//generates a random number between 0 and 4
function compChoiceRandom() {
    randomNumber = Math.floor(Math.random() * 5);
}

//checks who the winner of the round is (if is not tie)
function isWinner(youChoice) {
    checkingPointChoice();
    compChoice = (choiceObjects[randomNumber]);
    switch (compChoice.name) {
        case youChoice.beats2:
            roundAnouncement.innerHTML = "YOUR POINT";
            youPoints = youPoints + 1;
            break;
        case youChoice.beats1:
            roundAnouncement.innerHTML = "YOUR POINT";
            youPoints = youPoints + 1;
            break;
        default:
            roundAnouncement.innerHTML = "COMPUTERS POINT";
            compPoints = compPoints + 1;
            break;
    }
    console.log(compChoice.name, youChoice.beats1, youChoice.beats2);
}

//goes thru a round and changes point amounts
function playGame(clicked) {
    if (statusGame == 0) {
        compChoiceRandom();
        document.getElementById("choice-display").innerHTML = `YOU (${clicked.name}) vs. COMPUTER (${choiceObjects[randomNumber].name})`;
        if (choiceObjects[randomNumber] == clicked) {
            roundAnouncement.innerHTML = "TIED";
        } else {
            isWinner(clicked);
        }
        statusGame = 1;
    } else {
        window.alert("already chosen");
    }
    compPointsElement.innerHTML = `Computer points: ${compPoints}`;
    youPointsElement.innerHTML = `Your points: ${youPoints}`;
}

//determines if the game is done (won/lost) or will continue
function endRound() {
    console.log(pointChoice);
    console.log(youPoints);
    console.log(compPoints);
    switch (pointChoice) {
        case youPoints:
            console.log("done,you");
            zIndexChange(youWin);
            break;
        case compPoints:
            console.log("done,comp");
            zIndexChange(computerWin);
            break;
        default:
            console.log ("continue");
            break;
    }
    roundAnouncement.innerHTML = "RESULT";
    document.getElementById("choice-display").innerHTML = `YOU vs. COMPUTER`;
    statusGame = 0;
}

//changes what window is shown
function zIndexChange(gameInput) {
    switch (gameInput) {
        case computerWin:
            resultGameDisplay.style.zIndex = 3;
            resultGame.innerHTML = "You lost!";
            break;
        case youWin:
            resultGameDisplay.style.zIndex = 3;
            resultGame.innerHTML = "You won!";
            break;
        case newGame:
            resultGameDisplay.style.zIndex = -3;
            choicePointDisplay.style.zIndex = 3;
            break;
        case toGame:
            choicePointDisplay.style.zIndex = -3;
            break;
    }
}

function rulesShow() {
    document.getElementById("rules-wrapper").style.height = 100;
}