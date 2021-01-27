import express from "express";

const app = express();
const port = 9000;

const one: number = 1;
const two: number = 2;

app.get("/", (req, res) => {
  res.send("hello world typescript!");
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
