const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "abhaya") {
    req.user = { name: "abhaya", id: 05 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

module.exports = authorize;
