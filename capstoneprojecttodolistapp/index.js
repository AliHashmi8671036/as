import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var todolist = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const day = weekDays[date.getDay()];
const month = monthName[date.getMonth()];
const dat = date.getDate();

const datetoDisplay = day +", "+ month +" "+ dat ;


app.get("/", (req, res) => {
    console.log(req.body["taskName"]);
    todolist.push(req.body["taskName"]);
    res.render("index.ejs", {
        datetoDisplayed: datetoDisplay,
        todolists: todolist
    });
})

app.get("/work", (req, res)=> {
    res.render("index.ejs");
});

app.listen(port, (req, res)=> {
    console.log(`Listening on port ${port}.`);
});
