const router = require("express").Router();
const { updateProfile, getProfile } = require("./controller.js");

router.post("/", updateProfile);
router.get("/", getProfile);

module.exports = router;
