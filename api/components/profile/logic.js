const db = require("../../modules/database");

const getProfile = async () => {
  const profile = await db.readDocuments("profile", {});
  return profile;
};
const updateProfile = async (profile) => {
  try {
    await db.updateDocument("profile", {}, profile);
  } catch (error) {
    if (error.status === 404) {
      await db.createDocument("profile", profile);
    } else {
      throw error;
    }
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
