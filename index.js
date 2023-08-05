const express = require("express");

const app = express();

const PORT = 8080;
const HOST = "0.0.0.0";


app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
})

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
})
