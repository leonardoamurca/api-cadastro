const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", ({ res }) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
