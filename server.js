const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./router/");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", router);

module.exports = app;
