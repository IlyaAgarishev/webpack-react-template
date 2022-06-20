const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Init
const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  console.log("dev mode");
} else {
  console.log("PRODUCTION MODE");
}

// App Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));

// Server Initialization
app.get("/", (req, res) => res.sendFile("index.html"));
var port = process.env.PORT || 1234;

app.listen(port, () =>
  console.log(`Server initialized on: http://localhost:${port}`)
);
