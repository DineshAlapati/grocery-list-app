const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')

const router = require("./backend/router");

const app = express();

// parse application/json
app.use(bodyParser.json({ limit: "100kb" }));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 9000;

app.listen(port);

console.log(`App is listening on port ${port}`);
