const router = require("express").Router();
require("dotenv").config();
const version = process.env.VERSION || "v1";
router.use("/api/" + version, require("./components"));

module.exports = router;
