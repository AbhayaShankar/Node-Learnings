// synchronous file system.

const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "context", "subfolder", "test.txt");

const data = readFileSync(filepath, "utf-8");
console.log(data);

// reading and writing a file using node's built-in modules

const firstPath = path.join(process.cwd(), "context", "first.txt");
const secondPath = path.join(process.cwd(), "context", "second.txt");

const firstFile = readFileSync(firstPath, "utf8");
const secondFile = readFileSync(secondPath, "utf8");

console.log(
  "First File : ",
  firstFile,
  "and the",
  "Second File : ",
  secondFile
);

/*
writeFileSync(
  "./context/resultingFile.txt",
  `The Resulted File is : ${firstFile} ${secondFile}`
);
*/

// Now if your file (resultingFile.txt) already contains something and you run this writeFileSync - this will override anything present in your file. And if you want to append the value in your file then you have to pass another argumnet which is a {flag : 'a'}, this will ensure the value is appended.

writeFileSync(
  "./context/resultingFile.txt",
  `The Resulted File is : ${firstFile} ${secondFile}`,
  { flag: "a" }
);
