const authorize = (req, res, next) => {
  console.log("Auhtorize");
  next();
};

module.exports = authorize;
