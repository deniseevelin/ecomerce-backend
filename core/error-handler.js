module.exports = async (err, req, res, next) => {
  let code = 403;
  let message = "Forbidden";
  switch (err.message) {
    case "tec002":
      code = 400;
      message = "Bad request";
      break;
  }
  res.status(code).json({
    code,
    status: false,
    message,
    timestamp: new Date() * 1,
  });
};
