import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";
const yourUsername = "hashmi";
const yourPassword = "123qwe";
const yourAPIKey = "281b2142-e420-4155-a14c-42fb3308bfbc";
const yourBearerToken = "93837c59-da41-4226-8196-e8aa04047508";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
 
  try {
    const response = await axios.get(`${API_URL}random`);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
    const response = await axios.get(API_URL+"all?page=2",{ auth: { username: "hashmi", password: "123qwe", }});
    console.log(response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) }); 
});
  
  

app.get("/apiKey", async (req, res) => {
    const response = await axios.get(API_URL+"filter", { params: { score: 7, apiKey: "ab6f93ff-6caf-4b07-9f4f-63a50bd0c355" }});
    res.render("index.ejs", {content: JSON.stringify(response.data), });  
  });

app.get("/bearerToken", async (req, res) => {
    const response = await axios.get(API_URL+"secrets/2", { headers: { Authorization: "Bearer a134e57a-6ed4-44d0-9702-c9168753856e" } });
    res.render("index.ejs", {content: JSON.stringify(response.data)});  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

