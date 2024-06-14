---
outline: [1, 6]
---

# TvConfig

::: info Descrição
Nesta página podemos ver o model da tabela `tv_configs`.
:::

### Model

| Coluna            |      Tipo       | NOTNULL |                    Descrição |
| ----------------- | :-------------: | :-----: | ---------------------------: |
| 'id'              | bigint unsigned | `true`  | Identificador único e serial |
| 'time_update'     |       int       | `true`  | Tempo de atualização da tela |
| 'meta_cannula'    |  decimal(8,2)   |         |              Meta de cânulas |
| 'cannula_current' |  decimal(8,2)   |         |       Venda atual de cânulas |
| 'created_at'      |    timestamp    |         |              Data de criação |
| 'updated_at'      |    timestamp    |         |   Data da última atualização |
