// alert("Game alert");
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*4);
    return randomNumber;
}

var buttonColours = ["red","blue","green","yellow"];

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

