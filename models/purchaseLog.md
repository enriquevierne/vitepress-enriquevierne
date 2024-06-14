---
outline: [1, 6]
---

# PurchaseLog

::: info Descrição
Nesta página podemos ver o model da tabela `purchase_logs`.
:::

### Model

| Coluna                      |      Tipo       | NOTNULL |                    Descrição |
| --------------------------- | :-------------: | :-----: | ---------------------------: |
| 'id'                        | bigint unsigned | `true`  | Identificador único e serial |
| 'user_id'                   | bigint unsigned | `true`  | ID do usuário dono do pedido |
| 'purchase_id'               | bigint unsigned | `true`  |                 ID do pedido |
| 'purchase_logs_description' |      text       |         |            Texto da mensagem |
| 'created_at'                |    timestamp    |         |              Data de criação |
| 'updated_at'                |    timestamp    |         |   Data da última atualização |
