const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath1 = path.join(process.cwd(), "navbar-app", "index.html");
const filePath2 = path.join(process.cwd(), "data.js");

const file1 = fs.readFileSync(filePath1, "utf8");
const file2 = fs.readFileSync(filePath2, "utf8");
const stylesPath = fs.readFileSync("./navbar-app/styles.css");
const imagePath = fs.readFileSync("./navbar-app/logo.svg");
const LogicPath = fs.readFileSync("./navbar-app/browser-app.js");

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

  //Styles route
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylesPath);
    res.end();
  }

  //Image route
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(imagePath);
    res.end();
  }

  //Logic route
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(LogicPath);
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
