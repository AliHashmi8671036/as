
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 0;
$(document).keypress(function() { 
    nextSequence();
});
function checkAnswer(currentLevel) {
    var gameLen = gamePattern.length;
    var userLen = userClickedPattern.length;
    var i = 0;

    if(gameLen == userLen) {
        if(gamePattern[i]==userClickedPattern[i]){

            console.log(gamePattern[i],userClickedPattern[i]);
            console.log("success");
        } else {
        
            console.log("Wrong");
    
        }
    } else {
        
        console.log("Wrong");

    }
    // (i<=game) {
    //     if(gamePattern[i]==userClickedPattern[i]){

    //         console.log(gamePattern[i],userClickedPattern[i]);
    //         console.log("success");
    //     }
    //     else {
    //         $("#level-title").text("Game Over, Press Any Key to Restart.");
    //         console.log("wrong");

    //     }
    // }
    // i++;
}
function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level "+level);
}
$(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function playSound(name) {
    var aud = new Audio("./sounds/"+name+".mp3");
    aud.play();
}
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    },100);
}



