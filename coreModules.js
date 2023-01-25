const fs = require("fs");
fs.writeFileSync("hello2.txt", "Hello World from node js again");
console.log("File created successfully");
console.log(__dirname, "kk", __filename);
