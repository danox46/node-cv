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

const listEducation = async (req, res) => {
  try {
    res
      .status(200)
      .send({ message: "success", educationList: await logic.listEducation() });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error" });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const query = { degree: req.body.degree };
    await logic.deleteEducation(query);
    res.status(201).send({ message: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error" });
  }
};

const filterEducation = async (req, res) => {};

module.exports = {
  addEducation,
  updateEducation,
  listEducation,
  deleteEducation,
  filterEducation,
};
