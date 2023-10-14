const router = require("express").Router();
const {
  addProject,
  updateProject,
  listProjects,
  deleteProject,
  filterProjects,
} = require("./controller.js");

router.post("/", addProject);
router.patch("/", updateProject);
router.get("/", listProjects);
router.delete("/", deleteProject);
router.get("/filter", filterProjects);

module.exports = router;
