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
    if (youChoice.beats2 != choiceObjects[randomNumber].name){
        console.log("lose");
    } else{
        console.log("win");
    }
}

function playGame(clicked) {
    compChoiceRandom();
    switch (clicked) {
        case choiceObjects[0]:
            if (randomNumber == 0) {
                roundAnouncement.innerHTML = "Tied"
                console.log(randomNumber)
            } else {
                isWinner(choiceObjects[0]);
                console.log("not tied", randomNumber);
            }
            break;
        case choiceObjects[1]:
            if (compChoice == 1) {
                roundAnouncement.innerHTML = "Tied"
                console.log("tied")
            } else {
                console.log("not tied");
            }
            break;
        case choiceObjects[2]:
            if (compChoice == 2) {
                roundAnouncement.innerHTML = "Tied"
            } else {
                console.log("not tied");
            }
            break;
        case choiceObjects[3]:
            if (compChoice == 3) {
                roundAnouncement.innerHTML = "Tied"
            } else {
                console.log("not tied");
            }
            break;
        case choiceObjects[4]:
            if (compChoice == 4) {
                roundAnouncement.innerHTML = "Tied"
            } else {
                console.log("not tied");
            }
            break;
                
            
    }

    compChoiceRandom();
}