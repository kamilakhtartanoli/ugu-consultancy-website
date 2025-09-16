const express = require('express');
const { database } = require('./database/db');
const env = require('dotenv').config();
const cors = require('cors');
const { router } = require('./Routes/Route');

const app = express();

const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use('/api', router);

database();

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});