const serverless = require("serverless-http");
const express = require("express");
const { database } = require("./database/db");
require("dotenv").config();
const cors = require("cors");
const { router } = require("./Routes/Route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

database();

module.exports = app;
module.exports.handler = serverless(app);