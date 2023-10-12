import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var todolist = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/today", (req, res)=> {
    res.render("index.ejs");
})

app.get("/work", (req, res)=> {
    res.render("index.ejs");
})

app.post("/add", (req, res)=> {
    todolist.push(req.body["taskName"]);
    res.render("index.ejs", {
        todolists: todolist
    });
    // console.log(todolist);
})

app.listen(port, (req, res)=> {
    console.log(`Listening on port ${port}.`);
});
