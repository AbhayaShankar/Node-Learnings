const jwt = require("jsonwebtoken");
const { UnAuthorizedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnAuthorizedError("Token not provided");
  }

  // getting back token
  const Usertoken = authHeader.split(" ")[1];

  try {
    // we get access to the payload which we pass in jwt.sign.

    // So in decoded , we have data of the payload which we had passed.
    const decoded = jwt.verify(Usertoken, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnAuthorizedError("Not Authorized to access this route");
  }
};

module.exports = authMiddleware;