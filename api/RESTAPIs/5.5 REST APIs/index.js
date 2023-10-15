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
const yourBearerToken = "a134e57a-6ed4-44d0-9702-c9168753856e";
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
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const postId = {
    id: req.body.id,
    secret: req.body.secret,
    score: req.body.score,
  };
  // console.log(req.body);
  try {
    const result = await axios.post(API_URL+"/secrets",postId,config );
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data)});
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const putId = {
    id: req.body.id,
    secret: req.body.secret,
    score: req.body.score,
  };
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  try {
    const result = await axios.put(API_URL+"/secrets/"+searchId, putId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data)});
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // console.log(searchId);
  // console.log(req.body);
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  const patchId = {
    id: req.body.id,
    secret: req.body.secret,
    score: req.body.score,
  };
  // console.log(patchId);
  
    const result = await axios.patch(API_URL+"/secrets/"+searchId, patchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  const response = await axios.delete( API_URL+"/secrets/"+searchId, config);
  
  // console.log(response.data);
  // res.render("index.ejs", { content: JSON.stringify(response.data)  });

  // 
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  // try {
  //   
    

  // } catch (error) {
  //   res.render("index.ejs", { content: JSON.stringify(error.response.data)});
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
