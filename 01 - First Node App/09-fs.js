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

const result = writeFileSync(
  "./context/resultingFile.txt",
  `The Resulted File is : ${firstFile} ${secondFile}`
);
