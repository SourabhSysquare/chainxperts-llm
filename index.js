const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()

const generate = require("./routes/generate.route");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/chainxprests-llm/generate", generate);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});
