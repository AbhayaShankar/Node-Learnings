// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received...by ${name} who is ${id} years old`);
});

customEmitter.on("response", () => {
  console.log(`Abhaya is learning Node js for backend`);
});

customEmitter.on("response", () => {
  console.log(
    `Abhaya will later switch to Express for building backend logics. `
  );
});

customEmitter.emit("response", "Shanky", 24);
