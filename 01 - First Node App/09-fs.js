const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "context", "subfolder", "test.txt");

const data = fs.readFileSync(filepath, "utf-8");
console.log(data);
