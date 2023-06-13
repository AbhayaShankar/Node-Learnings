const pageNotFound = (req, res) => {
  res
    .status(404)
    .send(`<h1>Oopsies.. The Page you are trying to find do not exist </h1>`);
};

module.exports = pageNotFound;
