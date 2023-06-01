const path = require("path");

// console.log(path.sep);

// craete a file path which you can use anytime.
const filepath = path.join(process.cwd(), "context", "subfolder", "test.txt");
console.log(filepath);

// get teh file name at the end of the filePath
const base = path.basename(filepath);
console.log(base);
