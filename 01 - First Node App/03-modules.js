// Common JS, every file is module by default
// Modules - Encapsulated Code (only share minimum)
// Modules

const { luffy, baby } = require("./04-names");
const { personList } = require("./06-alternative-export");
const sayHi = require("./05-utils");

const firstPerson = personList[0].name;
// console.log(firstPerson);

require("./07-mind-grenade");

// sayHi("Shanky Boyy");
// sayHi(luffy);
// sayHi(baby);
// sayHi(firstPerson);
