const express = require("express");
const path = require("path");
const { readFileSync } = require("fs");

const app = express();

const Homepath = path.join(process.cwd(), "navbar-app", "index.html");

// setup static and middlewares
app.use(express.static("./public"));

// ☝️ we could have also used "navbar-app"

// app.get("/", (req, res) => {
//   res.status(200).send(readFileSync(Homepath, "utf8"));
// "Adding to static assets -- similar to staticPages in NEXT JS."
// "SSR - Server side rendering exactly like NEXT JS."
// });

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Server up and runnnign");
});
