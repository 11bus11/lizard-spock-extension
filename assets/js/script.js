var pointChoice = 0;

var threePoint = document.getElementById("3-point");
var fivePoint = document.getElementById("5-point");
var tenPoint = document.getElementById("10-point");

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

console.log(pointChoice);