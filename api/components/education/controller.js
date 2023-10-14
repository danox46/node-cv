const Education = require("./schema.js");
const logic = require("./logic.js");

const addEducation = async (req, res) => {
  try {
    const education = req.body;
    await logic.addEducation(education);
    res.status(201).send({ message: "created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error" });
  }
};
const updateEducation = async (req, res) => {};
const listEducation = async (req, res) => {};
const deleteEducation = async (req, res) => {};
const filterEducation = async (req, res) => {};

module.exports = {
  addEducation,
  updateEducation,
  listEducation,
  deleteEducation,
  filterEducation,
};
