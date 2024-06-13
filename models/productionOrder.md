---
outline: [1, 6]
---

# ProductionOrder

::: info Descrição
Nesta página podemos ver o model da tabela `production_orders`.
:::

### Model

| Coluna                   |      Tipo       | NOTNULL |                    Descrição |
| ------------------------ | :-------------: | :-----: | ---------------------------: |
| 'id'                     | bigint unsigned | `true`  | Identificador único e serial |
| 'production_order_batch' |       int       | `true`  |   Número do lote de produção |
| 'created_at'             |    timestamp    |         |              Data de criação |
| 'updated_at'             |    timestamp    |         |   Data da última atualização |
