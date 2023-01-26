let a = 20;
let b = 0;
// setTimeout(() => {
//   b = 10;
// }, 1000);
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve((b = 30));
  }, 1000);
});
waitingData.then(() => {
  console.log(a + b);
});
// console.log(a + b);
