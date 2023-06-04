const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "./context/big.txt",
    `hello Abhaya This is day ${i} of learning Node Js.\n`,
    { flag: "a" }
  );
}
