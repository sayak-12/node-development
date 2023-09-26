const express = require("express");

const app = express();

const requestHandler = (req, res, endpoint)=>{
    console.log("request made");
    console.log(req.url);
    const path = `./views${endpoint}`;
    res.status(200).sendFile(path, { root: __dirname });
}
app.get("/", (req, res) => {
    requestHandler(req, res, "/");
});

app.get("/about", (req, res) => {
  requestHandler(req, res, "/about.html");
});

app.get("/about-us", (req, res) => {
  console.log("request made");
  console.log(req.url);
  res.redirect(301, "/about");
});

app.get("/contact", (req, res) => {
    requestHandler(req, res, "/contact.html");
});

app.use((req, res) => {
    requestHandler(req, res, "/404.html");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});