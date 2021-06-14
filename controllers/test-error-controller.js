const testError = {
  tester: async (req, res, next) => {
    try {
      throw new Error("tec002");
      // res.send("Hellooo")
    } catch (e) {
      next(e);
    }
  },
};

module.exports = testError;
