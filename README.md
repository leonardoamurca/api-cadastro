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
  **Request**: `GET https://localhost:3000/users`  
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

- **GET /users/:id**: Obtém um determinado usuário do banco de dados de acordo com o parâmetro id passado no URL. Caso um usuário com esse id não seja encontrado, seu retorno será um objeto vazio.  
   Exemplo:  
   **Request**: `GET https://localhost:3000/users/1`  
   **Response**:

  ```json
  {
    "_id": 1,
    "name": "Cazalbé",
    "email": "cazalbe@gmail.com",
    "address": "Rua Aarão Steimbruch, 7"
  }
  ```

- **POST /users**: Insere um usuário no banco de dados e retorna o mesmo.
  Exemplo:  
   **Request**:  
   `POST https://localhost:3000/users`

  ```json
  {
    "name": "Cazalbé",
    "email": "cazalbe@gmail.com",
    "address": "Rua Aarão Steimbruch, 7"
  }
  ```

  **Response**:

  ```json
  {
    "_id": 1,
    "name": "Cazalbé",
    "email": "cazalbe@gmail.com",
    "address": "Rua Aarão Steimbruch, 7"
  }
  ```

- **PUT /users/:id**: Atualiza propriedades de um usuário no banco de dados e o retorna. Caso não exista um usuário com o id passado na URL, a string `"Erro! Usuário não encontrado!"` é retornada.  
   Exemplo:  
   **Request**:  
   `PUT https://localhost:3000/users/1`

  ```json
  {
    "name": "Carlos Alberto"
  }
  ```

  **Response**:

  ```json
  {
    "_id": 1,
    "name": "Carlos Alberto",
    "email": "cazalbe@gmail.com",
    "address": "Rua Aarão Steimbruch, 7"
  }
  ```

- **DELETE /users/:id**: Deleta um determinado usuário no banco de dados e o retorna. Caso um usuário com o id passado na URL, a string `"Erro! Usuário não encontrado!"` é retornada.
  Exemplo:  
   **Request**:  
   `DELETE https://localhost:3000/users/1`
  **Response**:

  ```json
  [
    {
      "_id": 1,
      "name": "Carlos Alberto",
      "email": "cazalbe@gmail.com",
      "address": "Rua Aarão Steimbruch, 7"
    }
  ]
  ```
