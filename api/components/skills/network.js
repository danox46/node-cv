const router = require("express").Router();
const {
  addSkill,
  updateSkill,
  listSkills,
  deleteSkill,
  filterSkills,
} = require("./controller.js");

router.post("/", addSkill);
router.patch("/", updateSkill);
router.get("/", listSkills);
router.delete("/", deleteSkill);
router.get("/filter", filterSkills);

module.exports = router;
