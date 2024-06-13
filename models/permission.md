---
outline: [1, 6]
---

# Permission

::: info Descrição
Nesta página podemos ver o model da tabela `permissions`.
:::

### Model

| Coluna            |      Tipo       | NOTNULL |                       Descrição |
| ----------------- | :-------------: | :-----: | ------------------------------: |
| 'id'              | bigint unsigned |  `true`   |    Identificador único e serial |
| 'permission_name' |  varchar(255)   |  `true`   |               Nome da permissão |
| 'user_id'         | bigint unsigned |  `true`   | ID do usuário dono da permissão |
