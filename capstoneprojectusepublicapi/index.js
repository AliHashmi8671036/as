import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async (req, res)=> {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
        res.render("index.ejs", {
            joke: result.data.setup,
        })
    } catch(error) {
        console.log("Error: ", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});