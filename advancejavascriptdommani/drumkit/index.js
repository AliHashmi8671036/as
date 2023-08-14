
var x = document.querySelectorAll(".drum").length;
var i = 0
while (i < x) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){   
        
        var x = this.innerHTML;
        makeSound(x);
        buttonAnimation(x);
    })
    i++;
}

document.addEventListener("keypress", function(event){   
    
    makeSound(event.key);
    buttonAnimation(event.key);    
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log(x);
        
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
// document.addEventListener("keypress", respondToKey(z));

// function respondToKey(z) {
//     console.log("Key pressed.");
// }


// function add(num1,num2) {
//     return num1 + num2;
// }
// function multiply(num1,num2) {
//     return num1 * num2;
// }
// function subtract(num1,num2) {
//     return num1 - num2;
// }
// function divide(num1,num2) {
//     return num1 / num2;
// }
// function calculator(num1,num2,operator) {
//     return operator(num1,num2)
// }

// this.style.color = "white";

        // if(this.innerHTML=='w') {
        //     var audio = new Audio('./sounds/tom-1.mp3');
        // } else if(this.innerHTML=='a') {
        //     var audio = new Audio('./sounds/tom-2.mp3');
        // } else if(this.innerHTML=='s') {
        //     var audio = new Audio('./sounds/tom-3.mp3');
        // } else if(this.innerHTML=='d') {
        //     var audio = new Audio('./sounds/tom-4.mp3');
        // } else if(this.innerHTML=='j') {
        //     var audio = new Audio('./sounds/snare.mp3');
        // } else if(this.innerHTML=='k') {
        //     var audio = new Audio('./sounds/crash.mp3');
        // } else if(this.innerHTML=='l') {
        //     var audio = new Audio('./sounds/kick-bass.mp3');
        // }