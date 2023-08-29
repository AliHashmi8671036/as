import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>This is Ali Shams and i am trying to become a Full Stack Developer.</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +1234512345.</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
