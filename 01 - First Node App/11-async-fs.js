// Async file system

// This approach right here implemented is what is called Callback hell.
// You keep on calling a callback in a nested fashion and if one code has an error, remaining doesnt execute and a lot of issue in that.

// We do have a better approach while implementing this... We will see it down below  : 👇

const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./context/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFileData = result;
  readFile("./context/second.txt", "utf8", (err2, data) => {
    if (err) {
      console.log(err2);
      return;
    }
    const secondFileData = data;
    writeFile(
      "./context/async-result.txt",
      `The Resulting Async File is : ${firstFileData} and ${secondFileData}`,
      { flag: "a" },
      (err3, res) => {
        if (err3) {
          console.log(err3);
          return;
        }
        console.log(`Thrid Callback - ${res}`);
        console.log("Done");
      }
    );
  });
});

console.log("Starting again");
