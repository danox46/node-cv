const logic = require("./logic.js");
const { z } = require("zod");

const experienceSchema = z.object({
  startDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
  endDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
  company: z.string().min(1, "Company is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  _id: z.string().optional(),
});

const addExperience = async (req, res) => {
  try {
    const experience = experienceSchema.parse(req.body);
    await logic.addExperience(experience);
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

const updateExperience = async (req, res) => {
  try {
    const experience = experienceSchema.parse(req.body);
    await logic.updateExperience(experience);
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

const listExperience = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
      experienceList: await logic.listExperience(),
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const querySchema = z.object({
      _id: z.string().min(1, "ID is required"),
    });
    const query = querySchema.parse(req.body);

    await logic.deleteExperience(query);
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

const filterExperience = async (req, res) => {
  try {
    res.status(200).send({ message: "filter not implemented" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

module.exports = {
  addExperience,
  updateExperience,
  listExperience,
  deleteExperience,
  filterExperience,
};
