
var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = []; 
var level = 0;
var gamestart = 0;


// gameStart();
// userClick();
// checkAnswer();
// setTimeout(nextSequence(),1000);
// userClick();
// checkAnswer();



function gameStart() {
    $(document).keypress(function() { 
        level++;
        $("#level-title").text("Level "+level);
        nextSequence();

    });
}
function userClick() {
    var clicklen = 0;
    $(".btn").click(function() {
        
        var gamePatternlen = gamePattern.length;  
        if (clicklen < gamePatternlen) {
            var userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(userClickedPattern);
            if (gamePattern[clicklen]==userClickedPattern[clicklen]) {

                console.log("success");
                
            } else {
                $("#level-title").text("Game Over, Press Any Key to Restart.");
                console.log("wrong");
            }
        }     
        clicklen++;
        userClickedPattern = [];
            
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
function checkAnswer(currentLevel) {
    var gameLen = gamePattern.length;
    var userLen = currentLevel.length;
    var gameStat;
    if(gameLen == userLen) {
        var i = 0;
        var count = 0;
        while( i < gameLen ) {
    
            if (gamePattern[i]==currentLevel[i]) {
                i++;
            } else {
                count++;
                i = gameLen;
            }
        }
        if(count == 1) {

            $("#level-title").text("Game Over, Press Any Key to Restart.");
            var gameStat = "wrong";
            playSound(gameStat);

        } else {
            var gameStat = "nextlevel";
            playSound(gameStat);
        }
    
    } else {
        console.log("wrong");
    }
}


