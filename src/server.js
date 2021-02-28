const express = require("express");
const { userStore } = require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());

// Listar Usuários
app.get("/users", ({ res }) => {
  res.send(userStore.findAll());
});

// Obter Usuário
app.get("/users/:id", (req, res) => {
  const user = userStore.find(req.params.id);

  res.send(user !== false ? user : {});
});

// Cadastrar Usuário
app.post("/users", (req, res) => {
  const { name, email, address } = req.body;
  const newUser = userStore.insert({ name, email, address });

  res.send(newUser);
});

// Editar Usuário
app.put("/users/:id", (req, res) => {
  const body = req.body;
  const updatedUser = userStore.update(req.params.id, { ...body });

  res.send(
    updatedUser !== false ? updatedUser : "Erro! Usuário não encontrado!"
  );
});

// Remover Usuário
app.delete("/users/:id", (req, res) => {
  const deletedUser = userStore.delete(req.params.id);

  res.send(
    deletedUser !== false ? deletedUser : "Erro! Usuário não encontrado!"
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
