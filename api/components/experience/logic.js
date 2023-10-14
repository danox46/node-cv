const db = require("../../modules/database");

const listExperience = async (page, pageSize, sortKey, sortValue) => {
  const experienceList = await db.readDocuments(
    "experience",
    {},
    { page, pageSize, sortKey, sortValue }
  );
  return experienceList;
};
const filterExperience = async (req, res) => {};

const addExperience = async (experience) => {
  await db.createDocument("experience", experience);
};

const deleteExperience = async (req, res) => {};
const updateExperience = async (req, res) => {};

module.exports = {
  addExperience,
  updateExperience,
  listExperience,
  deleteExperience,
  filterExperience,
};
