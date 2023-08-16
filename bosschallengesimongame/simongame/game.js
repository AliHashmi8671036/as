var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 1;
var gamestart = 0;
var clicklen = 0;
   
$(document).keypress(function() { 
        $("#level-title").text("Level "+level);
        nextSequence();
});


$(".btn").click(function() {
        var gamePatternlen = gamePattern.length;  
        var userClickedPatterLen = userClickedPattern.length;
        if (userClickedPatterLen < gamePatternlen) {
            var userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(userClickedPattern);
        }     
        userClickedPatterLen++;        
});

function checkAnswer(currentLevel) {
    
    var n = currentLevel.length-1;
    var gamePatternLen = gamePattern.length-1;
    if (gamePattern[n]==currentLevel[n]) {

        if(gamePatternLen==n) {
            userClickedPattern = [];
            var gameStat = "nextlevel";
            playSound(gameStat);
            level++;
            $("#level-title").text("Level "+level);
            setTimeout(nextSequence(),1000);
        }
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart.");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200)
        var gameStat = "wrong";
        playSound(gameStat);
        startOver();
    }

}
function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
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
function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level = 1;
}