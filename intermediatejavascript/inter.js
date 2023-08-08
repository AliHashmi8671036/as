// var tweet = prompt("Enter your text");
// tweet.slice(0,20);

// var yourName = prompt("What is your Name?");
// var yourPartner = prompt("What is your Partner Name?");
// function loveCalculator() { 
//     var n = Math.random();
//     n = n * 100;
//     n = Math.floor(n)+"%";
//     return n;
// }

// loveCalculator();
// function bmiCalculator (weight, height) {
//     var bmi = weight / (height*height);
//     bmi = Math.round(bmi);
//     var mess;
//     if(bmi<18.5) {
//         mess="Your BMI is "+bmi+", so you are underweight.";
//     } 
//     else if((bmi>18.5)&&(bmi<=24.9)) {
//         mess="Your BMI is "+bmi+", so you have a normal weight.";
//     }
//     else if(bmi>24.9) {
//         mess="Your BMI is "+bmi+", so you are overweight.";
//     }
//     return mess;
// }
// bmiCalculator(84,2);

// function isLeap(year) {
    
// /**************Don't change the code above****************/    
    
//     //Write your code here.    
//     if (year%4!=0) {
//         return "Not leap year.";
//     }
//     else if (year%100!=0) {
//         return "Leap year."
//     }
//     else if (year%400!=0) {
//         return "Not leap year.";   
//     }
//     else {
//         return "Leap year"
//     }

// /**************Don't change the code below****************/    

// }


// isLeap(2040);

// var guestNameList = ["a","b","c","d","e","f","g","h","i","j"];
// var Nooflist = guestNameList.length;

// var visitor = prompt("Enter your name:");

// var display = guestNameList.includes(visitor);

// if(display==true) {
//     window.alert("You are welcomed!");
// }
// else {
//     window.alert("Your Name is not in the List.");
// }

// var Friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
//     len = Friends.length;
//     n = Math.random() * len;
//     n = Math.floor(n);
      
//     mess = Friends[n]+" is going to buy lunch today!";

//     return mess;
// /******Don't change the code below*******/    
// }


// whosPaying();
var fibarray = [];

function fibonacciGenerator(n) {
    
    for(var i=0; i<n; i++) {   
        if (n===0) {
            return fibarray;
        }
        else if(n===1) {
            fibarray.push(i);
        }
        else if(n===2) {
            fibarray.push(i);
        }
        else if(n>2){

            if (i<2) {
                
                fibarray.push(i);
            
            } else {
                a = i-2;
                b = i-1;
                res = fibarray[a]+fibarray[b];
                fibarray.push(res);
            }
            
        }
    }
    return fibarray;
}

fibonacciGenerator(9);








