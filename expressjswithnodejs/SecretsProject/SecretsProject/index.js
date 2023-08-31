//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";


const app = express();
const port = 3000;
const dirnamepath = dirname(fileURLToPath(import.meta.url));
var savedPass = "ILoveProgramming";
var result, enteredPass, display;


app.use(bodyParser.urlencoded({extended:true}));

function secretpro(req, res, next) {
    result = req.body;
    enteredPass = result.password; 
    next();
}

app.use(secretpro);

app.get("/", (req, res)=> {
    res.sendFile(dirnamepath + "/public/index.html");
});

app.post("/check", (req, res)=> {
    if (savedPass==enteredPass) {
        res.sendFile(dirnamepath + "/public/secret.html");
    }
    else {
        res.sendFile(dirnamepath + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});

