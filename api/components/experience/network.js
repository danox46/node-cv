const router = require("express").Router();
const {
  addExperience,
  updateExperience,
  listExperience,
  deleteExperience,
  filterExperience,
} = require("./controller.js");

router.post("/", addExperience);
router.patch("/", updateExperience);
router.get("/", listExperience);
router.delete("/", deleteExperience);
router.get("/filter", filterExperience);

module.exports = router;
