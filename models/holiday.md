---
outline: [1, 6]
---

# Holiday

::: info Descrição
Nesta página podemos ver o model da tabela `holidays`.
:::

### Model

| Coluna |      Tipo       | NOTNULL |                    Descrição |
| ------ | :-------------: | :-----: | ---------------------------: |
| 'id'   | bigint unsigned |  `true`   | Identificador único e serial |
| 'date' |      date       |  `true`   |              Data do feriado |
| 'name' |  varchar(255)   |  `true`   |              Nome do feriado |
