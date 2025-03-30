const logic = require("./logic");
const { z } = require("zod");

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Lastname is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  currentTitle: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  summary: z.string().optional(),
  socialLinks: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      url: z.string().url("Invalid URL"),
    })
  ),
});

const getProfile = async (req, res) => {
  try {
    const profile = await logic.getProfile();
    res.status(200).send({ message: "success", profile });
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
const updateProfile = async (req, res) => {
  try {
    const profile = profileSchema.parse(req.body);
    await logic.updateProfile(profile);
    res.status(200).send({ message: "success" });
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

module.exports = {
  getProfile,
  updateProfile,
};
