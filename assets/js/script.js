var pointChoice =  0;

let threePoint = document.getElementById("3-point");
let fivePoint = document.getElementById("5-point");
let tenPoint = document.getElementById("10-point");

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
