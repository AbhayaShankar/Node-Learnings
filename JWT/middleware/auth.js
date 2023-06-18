const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("Token not provided", 401);
  }

  const Usertoken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(Usertoken, process.env.JWT_SECRET_KEY);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError("Not Authorized to access this route", 401);
  }
};

module.exports = authMiddleware;
