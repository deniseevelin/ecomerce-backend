module.exports = async (e, req, res, next) => {
  let code;
  let message;
  switch (e.message) {
    case "E001":
      code = 400;
      message = "There aren't registered products!";
      break;
    case "E002":
      code = 400;
      message = "Product not found!";
      break;
    case "E003":
      code = 400;
      message = "It was not possible to register the products!";
      break;
    case "E004":
      code = 400;
      message = "You must pass the correct product ID!";
      break;
    case "E005":
      code = 400;
      message = "Failed to update product!";
      break;
    case "E006":
      code = 400;
      message = "There aren't registered users!";
      break;
    case "E007":
      code = 400;
      message = "You must pass the correct user ID!";
      break;
    case "E008":
      code = 400;
      message = "User not found!";
      break;
    case "E009":
      code = 400;
      message = "Cards not found!";
      break;
    case "E010":
      code = 400;
      message = "User email already exists!";
      break;
    case "E011":
      code = 400;
      message = "It was not possible to register user!";
      break;
    case "E012":
      code = 400;
      message = "It was not possible to update user!";
      break;
    case "E013":
      code = 400;
      message = "Invalid password!";
      break;
    default:
      code = 400;
      message = "Unexpected error, try again!";
  }
  res.status(code).json({
    code,
    status: false,
    message,
    timestamp: new Date() * 1,
  });
};
