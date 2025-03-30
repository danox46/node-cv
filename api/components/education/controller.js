const logic = require("./logic.js");
const { z } = require("zod");

const educationSchema = z.object({
  institution: z.string().min(1, "Institution is required"),
  degree: z.string().min(1, "Degree is required"),
  _id: z.string().optional(),
  startDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
  endDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
});

const addEducation = async (req, res) => {
  try {
    const education = educationSchema.parse(req.body);
    const created = await logic.addEducation(education);
    res.status(201).send({ message: "created", _id: created.insertedId });
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

const updateEducation = async (req, res) => {
  try {
    const education = educationSchema.parse(req.body);
    await logic.updateEducation(education);
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

const listEducation = async (req, res) => {
  try {
    res
      .status(200)
      .send({ message: "success", educationList: await logic.listEducation() });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const querySchema = z.object({
      _id: z.string().min(1, "ID is required"),
    });
    const query = querySchema.parse(req.body);

    await logic.deleteEducation(query);
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

const filterEducation = async (req, res) => {
  try {
    res.status(200).send({ message: "filter not implemented" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

module.exports = {
  addEducation,
  updateEducation,
  listEducation,
  deleteEducation,
  filterEducation,
};
