---
outline: [1, 6]
---

# ProductionPurchase

::: info Descrição
Nesta página podemos ver o model da tabela `production_purchases`.
:::

### Model

| Coluna                |      Tipo       | NOTNULL |                    Descrição |
| --------------------- | :-------------: | :-----: | ---------------------------: |
| 'id'                  | bigint unsigned | `true`  | Identificador único e serial |
| 'user_id'             | bigint unsigned | `true`  | ID do usuário dono do pedido |
| 'production_order_id' | bigint unsigned | `true`  |      ID da ordem de produção |
| 'purchase_id'         | bigint unsigned | `true`  |                 ID do pedido |
| 'created_at'          |    timestamp    |         |              Data de criação |
| 'updated_at'          |    timestamp    |         |   Data da última atualização |
