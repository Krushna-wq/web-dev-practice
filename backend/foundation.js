const fs = require("fs")
const path = require("path");
const os = require("os");

console.log("NodeJS: ", process.versions);
console.log("V8: ", process.versions);
console.log("libuv", process.versions);
console.log("libuv", process.platform);
console.log("CPU", os.cpus().length);