import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

const db = new pg.Client({
    user: "postgres",
    host:  "localhost",
    database: "world",
    password: "12345",
    port: 5400,
});

db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
    if (err) {
        console.err("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }

    db.end();
})
