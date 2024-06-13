---
outline: [1, 6]
---

# BiometikPurchaseFile

::: info Descrição
Nesta página podemos ver as colunas da tabela, tipo de dados, se é nulo ou não, e a descrição de cada coluna.
:::

### Model

| Coluna                 |      Tipo       | NOTNULL |                     Descrição |
| ---------------------- | :-------------: | :-----: | ----------------------------: |
| 'id'                   | bigint unsigned |  true   |  Identificador único e serial |
| 'biometik_purchase_id' | bigint unsigned |  true   |                  ID do pedido |
| 'info'                 |  varchar(255)   |         |         Informação do arquivo |
| 'file'                 |  varchar(255)   |  true   |           Endereço do arquivo |
| 'created_at'           |    timestamp    |         |               Data de criação |
| 'updated_at'           |    timestamp    |         |     Data da última atualização |
| 'user_id'              | bigint unsigned |  true   | ID do usuário dono do arquivo |
