const router = require("express").Router();
const {
  addEducation,
  updateEducation,
  listEducation,
  deleteEducation,
  filterEducation,
} = require("./controller.js");

router.post("/", addEducation);
router.patch("/", updateEducation);
router.get("/", listEducation);
router.delete("/", deleteEducation);
router.get("/filter", filterEducation);

module.exports = router;
