const db = require("../../modules/database");

const addExperience = async (experience) => {
  await db.createDocument("experience", experience);
};

const updateExperience = async (experience) => {
  await db.updateDocument("experience", { _id: experience._id }, experience);
};

const listExperience = async (page, pageSize, sortKey, sortValue) => {
  const experienceList = await db.readDocuments(
    "experience",
    {},
    { page, pageSize, sortKey, sortValue }
  );
  return experienceList;
};

const deleteExperience = async (query) => {
  await db.deleteDocument("experience", query);
};

const filterExperience = async (req, res) => {
  // Implement filtering logic here if needed
};

module.exports = {
  addExperience,
  updateExperience,
  listExperience,
  deleteExperience,
  filterExperience,
};
