const retryLogic = async (
  callback,
  parameters,
  retries = 0,
  maxRetries = 5,
  delay = 500
) => {
  while (true) {
    try {
      return await callback(parameters);
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

module.exports = { retryLogic };
