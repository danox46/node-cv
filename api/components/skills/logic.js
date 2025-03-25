const db = require("../../modules/database");

const addSkill = async (skill) => {
  await db.createDocument("skills", skill);
};

const updateSkill = async (skill) => {
  await db.updateDocument("skills", { _id: skill._id }, skill);
};

const listSkills = async (page, pageSize, sortKey, sortValue) => {
  const skillsList = await db.readDocuments(
    "skills",
    {},
    { page, pageSize, sortKey, sortValue }
  );
  return skillsList;
};

const deleteSkill = async (query) => {
  await db.deleteDocument("skills", query);
};

const filterSkills = async (req, res) => {
  // Implement filtering logic here if needed
};

module.exports = {
  addSkill,
  updateSkill,
  listSkills,
  deleteSkill,
  filterSkills,
};
