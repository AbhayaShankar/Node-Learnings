// GLOBALS - NO WINDOW

// Most frequent and common globals used in NODE JS.

// __dirname  : path to current directory
// __filename : file name
// require    : fucntion to use modules ( COMMON JS )
// module     : info about the current module ( file )
// process    : info about the env where the program is being executed.

console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

setTimeout(() => {
  console.log("Hello World");
}, 3000);

setInterval(() => {
  console.log("Hello Abhaya");
}, 1000);
