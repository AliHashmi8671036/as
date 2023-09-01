import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// var data = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const nameLen = req.body["fName"].length+req.body["lName"].length;
  res.render("index.ejs", 
  { nameOfLen: nameLen
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
