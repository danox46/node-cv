const retryLogic = async (
  callback,
  retries = 0,
  maxRetries = 5,
  delay = 500
) => {
  while (true) {
    try {
      return await callback();
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw new Error("Too many retries");
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

module.exports = { retryLogic };
