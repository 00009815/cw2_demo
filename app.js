const express = require('express');
const path = require('path');

const app = express();


app.use('/static', express.static(path.join(__dirname, '/public')));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("home", {title: "Home"});
});

app.listen(8000, (error) => {
    if (error) throw error;

    console.log("App is running on port 8000");
});