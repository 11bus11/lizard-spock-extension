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
        beats: ["scissors", "lizard"]
    },
    {
        name: "paper",
        beats: ["rock", "spock"]
    },
    {
        name: "scissors",
        beats: ["paper", "lizard"]
    },
    {
        name: "lizard",
        beats: ["spock", "paper"]
    },
    {
        name: "spock",
        beats: ["scissors", "rock"]
    }
];

let randomNumber = 0;
function compChoiceRandom () {
    randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber)
}

function playGame(clicked) {
    compChoiceRandom();

    console.log(clicked)
}