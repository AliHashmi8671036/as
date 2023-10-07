import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

const date = new Date();
const day = date.getDay();

let type = "a weekday";
let adv = "its time to work hard";

if (day===0||day===6) {
    type = "a weekend";
    adv = "its time to have some fun.";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    })
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
})