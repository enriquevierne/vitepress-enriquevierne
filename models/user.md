---
outline: [1, 6]
---

# User

::: info Descrição
Nesta página podemos ver o model da tabela `users`.
:::

### Model

| Coluna              |      Tipo       | NOTNULL |                    Descrição |
| ------------------- | :-------------: | :-----: | ---------------------------: |
| 'id'                | bigint unsigned | `true`  | Identificador único e serial |
| 'name'              |  varchar(255)   | `true`  |              Nome do usuário |
| 'email'             |  varchar(255)   | `true`  |             Email do usuário |
| 'email_verified_at' |    timestamp    |         | Data de verificação do email |
| 'password'          |  varchar(255)   | `true`  |             Senha do usuário |
| 'avatar'            |  varchar(255)   | `true`  |              Foto do usuário |
| 'remember_token'    |  varchar(100)   |         |              Token de sessão |
| 'created_at'        |    timestamp    |         |              Data de criação |
| 'updated_at'        |    timestamp    |         |   Data da última atualização |
