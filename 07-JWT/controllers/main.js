// check username and password in login page (POST Request)
// if exists -- create a new JWT
// If not then send the Error message back to Front-end.

// setup JWT authentication so that only the request with access JWT can access the dashboard page

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  // Validations before sending body...

  /*

1. Mongoose in-built Validations [required property].
2. JOI -- npm package we use later on.
3. Make validations manually for username and password.

*/

  if (!username || !password) {
    throw new BadRequestError(
      "Invalid Credentials - Must provide username and password"
    );
  }

  if (password.length < 6) {
    throw new BadRequestError("Password must be atleast 6 characters long");
  }

  // Dummy id for signin using jwt.
  // In case of a db, we will br having a proper id, with which we can verify if the user is verified or not and then we can authenticate the user for the routes we want.

  // This is for just the demo, it will be provided by the DB.
  const id = new Date().getDate();

  const test = "Abhaya Is user";
  // Thiss is test case to undertand that - Whatever we pass in on jwt.sign i.e. whatever we pass in payload, we can be able to access it from jwt.verify which is defined in the auth middleware.

  // Now since I passed this test variable in the jwt.sign, I can be able to access that when I verify this token.

  // In jwt.sign({first param, second param, thrid param}) -

  // first is the payload - usually we try to keep is as small as possible and never send any confidential info into payload specially passowrd and stuffs.

  // second is the secret key

  // third is the opeions object, where we cam pass additional opeions to the sign in property.

  const token = jwt.sign({ id, username, test }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Registered", token });
};

const dashboard = async (req, res) => {
  const { user } = req;
  // console.log(req.user);

  const FakeToken = Math.floor(Math.random() * 100000);

  res.status(200).json({
    msg: `Hello ${user.username}`,
    secret: `User Credentials for ${user.username} with Token id : ${FakeToken}`,
  });
};

module.exports = { login, dashboard };
