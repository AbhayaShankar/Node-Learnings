const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/about") {
    if (req.url === "/") {
      res.end("Hello World...Welcome to the Home Page");
    } else if (req.url === "/about") {
      res.end("This is the About Page");
    }
  } else {
    res.end(`
        <h1> Oops! Something went wrong! </h1>
        <p> The page you are requesting doesn't exist. </p>
        <a href="/">Back to home</a>
      `);
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
