const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./api"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
