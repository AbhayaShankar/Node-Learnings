// check username and password in login page (POST Request)
// if exists -- create a new JWT
// If not then send the Error message back to Front-end.

// setup JWT authentication so that only the request with access JWT can access the dashboard page

const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  // Validations before sending body...

  /*

1. Mongoose in-built Validations [required property].
2. JOI -- npm package we use later on.
3. Make validations manually for username and password.

*/

  if (!username || !password) {
    throw new CustomAPIError(
      "Invalid Credentials - Must provide username and password",
      400
    );
  }

  if (password.length < 6) {
    throw new CustomAPIError("Password must be atleast 6 characters long", 400);
  }

  //   console.log("Username - ", username, "   Password - ", password);

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Registered", token });
};

const dashboard = async (req, res) => {
  const FakeToken = Math.floor(Math.random() * 100000);
  res
    .status(200)
    .json({ msg: `User Credentials for Abhaya with Token id : ${FakeToken}` });
};

module.exports = { login, dashboard };
