const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`
  <h1>Hello World from Express</h1>
  <a href="/input">Go to input Page</a>
  `);
});
app.get("/input", (req, res) => {
  res.send(`
  <h1>Hello World from Express input page</h1>
  input: <input type="text" placeholder="username" value=${req.query.name} /> <br>
  <button>Submit</button>
  <a href="/">Go to Home Page</a>
  `);
});
app.get("/about", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello World from Express about page ${name}`);
  } else {
    res.send("Hello World from Express about page");
  }
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
      age: 27,
      email: "andrew@gg.com",
    },
    {
      name: "tate",
      age: 22,
      email: "tate@gg.com",
    },
  ]);
});
app.listen(3001, () => {
  console.log("Server started on port 3000");
});
