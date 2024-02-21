const router = require("express").Router();

router.use("/education", require("./education/network"));
router.use("/experience", require("./experience/network"));
router.use("/profile", require("./profile/network"));
router.use("/projects", require("./projects/network"));
router.use("/skills", require("./skills/network"));

module.exports = router;
