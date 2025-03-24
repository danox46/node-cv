const router = require("express").Router();
require("dotenv").config();
const version = process.env.VERSION || "v0";
router.use("/api/" + version, require("./components"));

module.exports = router;
