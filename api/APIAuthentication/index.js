import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "jackhenry";
const yourPassword = "qwer123";
const yourAPIKey = "576bfb1f-fece-4793-816b-8c6ad9e1877e";
const yourBearerToken = "ab2b2c22-4090-4d33-b83e-085972b4b00a";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}random`);
    const data = JSON.stringify(response.data);
    res.render("index.ejs", {
      content: data,
    });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    try { 
      const responsebasic = await axios.get(`${API_URL}all?page=2`, {
          auth: {
            username: yourUsername,
            password: yourPassword,
          }
        });
      const databasic = JSON.stringify(responsebasic.data);
      res.render("index.ejs", {
        content: databasic,
      });
      
    } catch (error) {
      console.error("Failed to make request", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });


app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const responsekey = await axios.get(`${API_URL}filter`,
      {
        params: {
          score: 8,
          apiKey: yourAPIKey,
        },
      }
    );
    const datakey = JSON.stringify(responsekey.data);
    res.render("index.ejs", {
      content: datakey,
    });
    
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}`}};
  

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  
  try {
    const responsetoken = await axios.get(`${API_URL}secrets/2`, config);
    const datatoken = JSON.stringify(responsetoken.data);
    res.render("index.ejs", {
      content: datatoken,
    });
    
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
