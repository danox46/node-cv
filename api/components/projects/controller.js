const logic = require("./logic.js");
const { z } = require("zod");

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  assets: z.array(z.string()).optional(),
  startDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
  endDate: z
    .string()
    .optional()
    .transform((date) => (date ? new Date(date) : undefined)),
  _id: z.string().optional(),
});

const addProject = async (req, res) => {
  try {
    const project = projectSchema.parse(req.body);
    await logic.addProject(project);
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

const updateProject = async (req, res) => {
  try {
    const project = projectSchema.parse(req.body);
    await logic.updateProject(project);
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

const listProjects = async (req, res) => {
  try {
    res
      .status(200)
      .send({ message: "success", projectList: await logic.listProjects() });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const querySchema = z.object({
      _id: z.string().min(1, "ID is required"),
    });
    const query = querySchema.parse(req.body);

    await logic.deleteProject(query);
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

const filterProjects = async (req, res) => {
  try {
    res.status(200).send({ message: "filter not implemented" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ message: error.message || "error" });
  }
};

module.exports = {
  addProject,
  updateProject,
  listProjects,
  deleteProject,
  filterProjects,
};
