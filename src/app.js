const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World from GitHub Actions Demo!" });
});

app.get("/api/status", (req, res) => {
  res.json({ status: "okay", timestamp: new Date().toISOString() });
});

module.exports = app;
