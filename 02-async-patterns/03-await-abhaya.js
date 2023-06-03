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

const { readFile } = require("fs");

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

const start = async () => {
  try {
    const firstText = await getText("../01 - First Node App/context/first.txt");
    const secondText = await getText(
      "../01 - First Node App/context/second.txt"
    );
    console.log(firstText, secondText);
  } catch (error) {
    console.log(error);
  }
};

start();
