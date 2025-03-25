const logic = require("./logic.js");
const { z } = require("zod");

const skillSchema = z.object({
  title: z.string().min(1, "Title is required"),
  expertise: z.string().min(1, "Expertise is required"),
  relatedEducation: z.array(z.string()).optional(),
  relatedExperience: z.array(z.string()).optional(),
  searchLabels: z.array(z.string()).optional(),
  _id: z.string().optional(),
});

const addSkill = async (req, res) => {
  try {
    const skill = skillSchema.parse(req.body);
    await logic.addSkill(skill);
    res.status(201).send({ message: "created" });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .send({ message: "Validation error", errors: error.errors });
    } else {
      res
        .status(error.status || 500)
        .send({ message: error.message || "error" });
    }
  }
};

const updateSkill = async (req, res) => {
  try {
    const skill = skillSchema.parse(req.body);
    await logic.updateSkill(skill);
    res.status(201).send({ message: "updated" });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .send({ message: "Validation error", errors: error.errors });
    } else {
      res
        .status(error.status || 500)
        .send({ message: error.message || "error" });
    }
  }
};

const listSkills = async (req, res) => {
  try {
    res
      .status(200)
      .send({ message: "success", skillsList: await logic.listSkills() });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const querySchema = z.object({
      _id: z.string().min(1, "ID is required"),
    });
    const query = querySchema.parse(req.body);

    await logic.deleteSkill(query);
    res.status(201).send({ message: "deleted" });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .send({ message: "Validation error", errors: error.errors });
    } else {
      res
        .status(error.status || 500)
        .send({ message: error.message || "error" });
    }
  }
};

const filterSkills = async (req, res) => {
  try {
    res.status(200).send({ message: "filter not implemented" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

module.exports = {
  addSkill,
  updateSkill,
  listSkills,
  deleteSkill,
  filterSkills,
};
