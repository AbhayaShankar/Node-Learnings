// Now if we want to call another file inside the readFile -->  then we are going to invoke again the callback hell.

// So we have to come back with the different approach.

/*

const { readFile } = require("fs");

readFile("../01 - First Node App/context/first.txt", "utf8", (err, data) => {
    if (err) {
        return;
    } else {
        console.log(data);
    }
});

*/

// Catch is turning  the call returning a promise. That way we can handle the error and data passing on to the callbacks.

// You can apply .then().catch() chaining but I am going to stick with async await.

// const { readFile, writeFile } = require("fs");

// Also we can skip the below process and simply import module as promises like below

const { readFile, writeFile } = require("fs").promises;

// this retruns a promise , so we dont need to create a new Promise and all those...

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// reducing this promise statement to a simple promise which node's 'util' module provides us.

/*

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

*/

const start = async () => {
  try {
    const firstText = await readFile(
      "../01 - First Node App/context/first.txt",
      "utf8"
    );
    const secondText = await readFile(
      "../01 - First Node App/context/second.txt",
      "utf8"
    );

    await writeFile(
      "./async-await-result.txt",
      `The result for async await write file is ${firstText} WHICH CONCLUDES ${secondText}`,
      { flag: "a" }
    );

    console.log(firstText, secondText);
  } catch (error) {
    console.log(error);
  }
};

start();
