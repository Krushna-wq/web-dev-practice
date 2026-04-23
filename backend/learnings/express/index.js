const express = require("express");

const app = express();
const port =  8080;

app.listen(port, () => {
    console.log("app listing on port", port);
})

app.get('/menu', (req, res) => {
    res.json({ items: ["ABC", "XYZ"]});
});

app.use((req, res) => {
    console.log("request received");
    res.send("<h1>Hello World</h1>");
});
