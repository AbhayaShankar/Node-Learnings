const os = require("os");

// info about the currnet user
const user = os.userInfo();
// console.log(user);

// method that returns the uptime of the systen in seconds.

// console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
