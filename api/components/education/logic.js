const db = require("../../modules/database");

const addEducation = async (education) => {
  await db.createDocument("education", education);
};

const updateEducation = async (req, res) => {};

const listEducation = async (page, pageSize, sortKey, sortValue) => {
  const educationList = await db.readDocuments(
    "education",
    {},
    { page, pageSize, sortKey, sortValue }
  );
  return educationList;
};

const deleteEducation = async (query) => {
  await db.deleteDocument("education", query);
};

const filterEducation = async (req, res) => {};

module.exports = {
  addEducation,
  updateEducation,
  listEducation,
  deleteEducation,
  filterEducation,
};
