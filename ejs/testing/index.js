import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDate();
let dayType = "a weekday";
let advice = "Its time to work hard";

if (day === 0 || day === 6){
    let dayType = "the weekend";
    let advice = "Its time to have fun";

} 

app.get("/", (req, res)=> {
    res.render("index.ejs", {
        dayType: dayType,
        advice: advice,
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})