var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 1;
var gamestart = 0;
var clicklen = 0;

gameStart();
userClick();



function checkAnswer(currentLevel) {
    var n = currentLevel.length;
    n--;
    if (gamePattern[n]==currentLevel[n]) {
        
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart.");
        var gameStat = "wrong";
        playSound(gameStat);
        userClickedPattern = [];
        gamePattern = [];
        level = 1;
        // gameStart();

    }
}
function gameStart() {    
    $(document).keypress(function() { 
        $("#level-title").text("Level "+level);
        nextSequence();
    });
}
function userClick() {
    $(".btn").click(function() {
        var gamePatternlen = gamePattern.length;  
        if (clicklen < gamePatternlen) {
            var userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(userClickedPattern);
        }     
        clicklen++;        
    });
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


