import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// let countries = [];

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "asdfg",
  port: 5600,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let result = [];

app.get("/", async (req, res) => {
  //Write your code here.
  db.query("SELECT country_code FROM visited_countries", (err, res) => {
    if(err) {
      console.error("Error", err.stack);
    } else {
      result = res.rows;
    }
  });
  // const a = result[0];
  let countries = ['FR','US','PK','IN'];
  // console.log(a);
  // let countries = [];
  
  // result.rows.forEach((country) => {
  //   countries.push(country.country_code);
  // });

  res.render("index.ejs", {
    countries: countries,
    total: countries.length
  });
  db.end();
});
  

  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
