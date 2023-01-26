const fs = require("fs");
const path = require("path");
// fs.writeFileSync("hello.txt", "Hello from Node.js!");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, `Hello from Node.js! ${i}`);
// }
fs.readdir(dirPath, (err, files) => {
  // if (err) {
  //   console.log(err);
  // } else {
  //   console.log(files);
  // }
  files.forEach((file) => {
    console.log(file);
  });
});
