// Common JS, every file is module by default
// Modules - Encapsulated Code (only share minimum)
// Modules

const { luffy, baby } = require("./04-names");

const sayHi = require("./05-utils");

sayHi("Shanky Boyy");
sayHi(luffy);
sayHi(baby);
