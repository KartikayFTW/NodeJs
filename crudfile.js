const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
//to write file
fs.writeFileSync(filePath, "This is a simple text file");
//to read file
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//to update file
fs.appendFile(filePath, "and file name is apple.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File appended successfully");
  }
});

// to rename file
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File renamed successfully");
  }
});

// to delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);
