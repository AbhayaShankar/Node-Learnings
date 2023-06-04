const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath1 = path.join(process.cwd(), "navbar-app", "index.html");
const filePath2 = path.join(process.cwd(), "data.js");

const file1 = fs.readFileSync(filePath1, "utf8");
const file2 = fs.readFileSync(filePath2, "utf8");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  //   console.log(req.url);
  const url = req.url;

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(file1);
    res.end();
  }

  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(file2);
    res.end();
  }

  // 404 Error Page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(" <h1>Error page</h1> ");
    res.end();
  }
});

server.listen(5000);
