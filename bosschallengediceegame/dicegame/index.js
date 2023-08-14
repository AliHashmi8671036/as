var rnum1, rnum2;
rnum1 = Math.floor((Math.random() * 6) + 1);
rnum2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".dice .img1").setAttribute("src","./images/dice"+rnum1+".png");
document.querySelector(".dice .img2").setAttribute("src","./images/dice"+rnum2+".png");

if(rnum1 === rnum2) {
    document.querySelector("h1").innerHTML = "Draws";
} else if (rnum1 > rnum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}