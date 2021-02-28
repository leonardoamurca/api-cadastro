# API de cadastro

API para cadastro de usuários implementada em Node.js para a disciplina de Programação Web II.

## database.js

- **UserStore.findAll()**: Retorna todos os usuários cadastrados no banco de dados.
- **UserStore.find(id)**: Retorna usuário pelo id.
- **UserStore.insert(item)**: Insere usuário no banco de dados e retorna o usuário inserido.
- **UserStore.update(id, data)**: Atualiza atributos de um usuário específico e retorna o mesmo.
- **UserStore.delete(id)**: Deleta um usuários no banco de dados e retorna o mesmo.

## server.js

- **GET /users**: Obtém uma array dos usuários cadastrados no banco de dados. Caso não haja usuários, o retorno será um array vazio.  
  Exemplo:
  **Request**: `GET localhost:3000/users`
  **Response**:

  ```json
  [
    {
      "_id": 0,
      "name": "Leonardo Murça",
      "email": "leo@gmail.com",
      "address": "Rua dos Bobos, n 0"
    },
    {
      "_id": 1,
      "name": "Cazalbé",
      "email": "cazalbe@gmail.com",
      "address": "Rua Aarão Steimbruch, 7"
    }
  ]
  ```
