import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourUsername = "jackhenry";
const yourPassword = "qwer123";
const yourBearerToken = "61a53077-f819-4d88-a12b-fb675715fc83";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(`${API_URL}/secrets/${searchId}`, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const newSecret = req.body['secret'];
  const newScore = req.body['score'];
  console.log(newSecret,newScore);
  try {
    const result = await axios.post(`${API_URL}/secrets`, 
    req.body,
    config,
    );
    const data = JSON.stringify(result.data);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    const res = JSON.stringify(result.data);
    res.render("index.ejs", { content: res });
  } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
    

  // try {
  //   const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config);
  //   res.render("index.ejs", { content: JSON.stringify(result.data) });
  // } catch (error) {
  //   res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  // }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// {"id":50,"secret":"I pretend to be an art critic when visiting galleries, analyzing paintings even though I have no knowledge of art.","emScore":4,"username":"artcritiquefaker","timestamp":"2023-06-27 13:09:14 utc"}