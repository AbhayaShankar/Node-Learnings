const { createReadStream } = require("fs");

const stream = createReadStream("./context/big.txt");

// default chunk size - 64kb
// Last buffer - remainder chunk
// highWaterMark - control size
// const stream = createReadStream("./context/big.txt" , { highWaterMark : 90000 })
// const stream = createReadStream("./context/big.txt" , { encoding : 'utf8' })

// const stream = createReadStream("./context/big.txt", {
//     highWaterMark: 90050,
//     encoding: "utf8",
//   });

stream.on("data", (result) => {
  console.log(result);
});
