var pointChoice = 0;

function choosePointAmount() {
    const threePoint = document.getElementById("3-point");
    const fivePoint = document.getElementById("5-point");
    const tenPoint = document.getElementById("10-point");

    threePoint.addEventListener("click", function() {
        pointChoice = 3;
        console.log(pointChoice);
    });
    fivePoint.addEventListener("click", function() {
        pointChoice = 5;
        console.log(pointChoice);
    });
    tenPoint.addEventListener("click", function() {
        pointChoice = 10;
        console.log(pointChoice);
    });
};



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

function restore(goalWin) {
    if (goalWin == 0) {
        pointChoice = 3;
    };
    console.log(pointChoice);
    console.log(youPoints);
    console.log(compPoints);
    switch (goalWin) {
        case youPoints:
            console.log("done,you");
            break;
        case compPoints:
            console.log("done,comp");
            break;
        default:
            console.log ("continue");
            break;
    };
    statusGame = 0;
};