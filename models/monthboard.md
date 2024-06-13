---
outline: [1, 6]
---

# Monthboard

::: info Descrição
Nesta página podemos ver o model da tabela `monthboards`.
:::

### Model

| Coluna        |      Tipo       | NOTNULL |                    Descrição |
| ------------- | :-------------: | :-----: | ---------------------------: |
| 'id'          | bigint unsigned |  `true`   | Identificador único e serial |
| 'user_id'     | bigint unsigned |  `true`   |   ID do usuário dono da rota |
| 'start_date'  |      date       |  `true`   |               Início da rota |
| 'end_date'    |      date       |  `true`   |                  Fim da rota |
| 'description' |      text       |  `true`   |            Descrição do rota |
| 'label'       |  varchar(255)   |         |                 Tipo da rota |
| 'created_at'  |    timestamp    |         |              Data de criação |
| 'updated_at'  |    timestamp    |         |   Data da última atualização |
