const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.set("port", 5000);
module.exports = app;