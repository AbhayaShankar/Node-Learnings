const { createReadStream } = require("fs");

// const stream = createReadStream("./context/big.txt");
const stream = createReadStream("./context/big.txt", {
  highWaterMark: 90050,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
