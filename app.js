const express = require("express");
const cors = require("cors");

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}

const SERVER_NAME = process.env.SERVER_NAME || "localhost";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

app.get("/", (req, res) => {
    res.send({ msg: "Home page" });
});

app.get("/content", (req, res) => {
    const content = req.query.text;
    res.send({ msg: content });
});

app.get("/server", (req, res) => {
    res.send({ server: SERVER_NAME });
})

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, console.log('Running on port ' + PORT));