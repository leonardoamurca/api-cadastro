const express = require("express");

const { userStore } = require("./database");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", ({ res }) => {
  res.send(userStore.findAll());
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
