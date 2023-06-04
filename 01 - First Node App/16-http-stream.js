var http = require("http");
var { readFileSync, createReadStream } = require("fs");

http
  .createServer(function (req, res) {
    // const text = readFileSync("./context/bigger.txt", "utf8");
    // res.end(text);

    const readStream = createReadStream("./context/bigger.txt", "utf8");

    readStream.on("open", () => {
      readStream.pipe(res);
    });

    readStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
