const db = require("../../modules/database");

const addEducation = async (education) => {
  return await db.createDocument("education", education);
};

const updateEducation = async (education) => {
  await db.updateDocument("education", { _id: education._id }, education);
};

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
