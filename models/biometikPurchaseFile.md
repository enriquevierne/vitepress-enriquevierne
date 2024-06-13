---
outline: [1, 6]
---

# BiometikPurchaseFile

::: info Descrição
Nesta página podemos ver o model da tabela `biometik_purchase_files`.
:::

### Model

| Coluna                 |      Tipo       | NOTNULL |                     Descrição |
| ---------------------- | :-------------: | :-----: | ----------------------------: |
| 'id'                   | bigint unsigned | `true`  |  Identificador único e serial |
| 'biometik_purchase_id' | bigint unsigned | `true`  |                  ID do pedido |
| 'file'                 |  varchar(255)   | `true`  |           Endereço do arquivo |
| 'info'                 |  varchar(255)   |         |         Informação do arquivo |
| 'created_at'           |    timestamp    |         |               Data de criação |
| 'updated_at'           |    timestamp    |         |    Data da última atualização |
| 'user_id'              | bigint unsigned | `true`  | ID do usuário dono do arquivo |
