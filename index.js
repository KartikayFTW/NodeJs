// import { arr } from "./app";
const a = require("./app.js");
console.log("Hello World");

const x = 20;
// for (let i = 0; i < 33; i++) {
//   console.log(i % 3);
// }
console.log(a.arr[0]);
console.log(a.y);
const add = a.z(a.y, a.arr[0]);
console.log(add);

//filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterArr = arr.filter((item) => item % 2 === 0);
console.log(filterArr);
