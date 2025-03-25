const db = require("../../modules/database");

const addProject = async (project) => {
  await db.createDocument("projects", project);
};

const updateProject = async (project) => {
  await db.updateDocument("projects", { _id: project._id }, project);
};

const listProjects = async (page, pageSize, sortKey, sortValue) => {
  const projectList = await db.readDocuments(
    "projects",
    {},
    { page, pageSize, sortKey, sortValue }
  );
  return projectList;
};

const deleteProject = async (query) => {
  await db.deleteDocument("projects", query);
};

const filterProjects = async (req, res) => {
  // Implement filtering logic here if needed
};

module.exports = {
  addProject,
  updateProject,
  listProjects,
  deleteProject,
  filterProjects,
};
