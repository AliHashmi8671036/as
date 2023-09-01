import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const dirnamepath = dirname(fileURLToPath(import.meta.url));
var daynum;

app.get("/", (req, res) => {
    const today = new Date()
    const day = today.getDay()
    var type, adv;


    if(day===0||day==6) {
        type = "a weekend";
        adv = "It's time to have fun.";
    } else if(day>=1&&day<=5) {
        type = "a weekday";
        adv = "It's time to work hard.";            
        // res.send("<h1>Hey, It's a weekday, it's time to work hard.</h1>");
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });

});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})