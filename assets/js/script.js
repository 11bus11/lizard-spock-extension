var pointChoice = 0;
const threePoint = 3;
const fivePoint = 5;
const tenPoint = 10;
let choice = 0;

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

let randomNumber = 0;
let compPoints = 0;
let youPoints = 0;
let compPointsElement = document.getElementById("comp-point");
let youPointsElement = document.getElementById("you-point");
let roundAnouncement = document.getElementById("who-won");
let compChoice = "scissors";
var statusGame = 0;

function zIndexChange(clickedButton) {
    switch (clickedButton){
        case computerWin:
            break;
        case youWin:
            break;
        case continueToGame:
            document.getElementById("choice-point-display").style.zIndex = -3;
            break;
        case newGame:
            document.getElementById("result-game-display").style.zIndex = 3;
            break;
    }
    if (clickedButton == continueToGame) {
        document.getElementById("choice-point-display").style.zIndex = -3;
    } else {
        document.getElementById("result-game-display").style.zIndex = 3;
    }
    
};

function choosePointAmount(chosenElement) {
    pointChoice = chosenElement;
    console.log(pointChoice);
};

function checkingPointChoice() {
    if (pointChoice == 0) {
        pointChoice = 3;
    };
};

function compChoiceRandom() {
    randomNumber = Math.floor(Math.random() * 5);
}

function isWinner(youChoice) {
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
    };
    console.log(compChoice.name, youChoice.beats1, youChoice.beats2);
};

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
    };
    compPointsElement.innerHTML = `Computer points: ${compPoints}`;
    youPointsElement.innerHTML = `Your points: ${youPoints}`;
};

function endGame(winOrLose) {
    window.open("end.html");
    document.getElementById("win-or-lose").innerHTML = winOrLose;
}

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
    };
    roundAnouncement.innerHTML = "RESULT";
    document.getElementById("choice-display").innerHTML = `YOU vs. COMPUTER`;
    statusGame = 0;
};