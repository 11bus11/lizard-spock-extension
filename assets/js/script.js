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
    return pointChoice;
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

function compChoiceRandom() {
    randomNumber = Math.floor(Math.random() * 5);
}


let roundAnouncement = document.getElementById("who-won");
let compChoice = "scissors";

function isWinner(youChoice) {
    compChoice = (choiceObjects[randomNumber]);
    switch (compChoice.name) {
        case youChoice.beats2:
            roundAnouncement.innerHTML = "YOU WON";
            break;
        case youChoice.beats1:
            roundAnouncement.innerHTML = "YOU WON";
            break;
        default:
            roundAnouncement.innerHTML = "YOU LOST";
    }
    console.log(compChoice.name, youChoice.beats1, youChoice.beats2);
}

function playGame(clicked) {
    compChoiceRandom();
    document.getElementById("choice-display").innerHTML = `YOU (${clicked.name}) vs. COMPUTER (${choiceObjects[randomNumber].name})`;
    if (choiceObjects[randomNumber] == clicked) {
        roundAnouncement.innerHTML = "TIED";
    } else {
        isWinner(clicked);
    }

    compChoiceRandom();
}