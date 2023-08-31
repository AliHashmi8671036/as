import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const dirnamepath = dirname(fileURLToPath(import.meta.url));
var bandName = "";
var result;

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res, next) {
  result = req.body;
  bandName = result.street + result.pet;
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(dirnamepath+"/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is: </h1><h2>${bandName}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
