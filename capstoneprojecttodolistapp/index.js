import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const day = weekDays[date.getDay()];
const month = monthName[date.getMonth()];
const dat = date.getDate();
const listed = [];
const worklist = [];
const datetoDisplay = day +", "+ month +" "+ dat ;


app.get("/", (req, res) => {
    res.render("index.ejs", {
        datetoDisplayed: datetoDisplay,
        todolists : listed,
    });
})
app.post("/", (req, res)=> {
    listed.push(req.body["taskName"])
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        worklists: worklist,
    })
})


app.post("/work", (req, res)=> {
    worklist.push(req.body["workName"]); 
    res.redirect("/work");
});



app.listen(port, (req, res)=> {
    console.log(`Listening on port ${port}.`);
});
