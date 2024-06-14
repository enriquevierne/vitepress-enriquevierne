---
outline: [1, 6]
---

# Purchase

::: info Descrição
Nesta página podemos ver o model da tabela `purchases`.
:::

### Model

| Coluna                           |      Tipo       | NOTNULL |                    Descrição |
| -------------------------------- | :-------------: | :-----: | ---------------------------: |
| 'id'                             | bigint unsigned | `true`  | Identificador único e serial |
| 'user_id'                        | bigint unsigned | `true`  | ID do usuário dono do pedido |
| 'purchase_process'               |   varchar(50)   | `true`  |             Status do pedido |
| 'purchase_date'                  |      date       | `true`  |               Data do pedido |
| 'purchase_clip'                  |       int       |         |             Grampo do pedido |
| 'purchase_production'            |   varchar(50)   |         |           Produção do pedido |
| 'purchase_client'                |       int       | `true`  |            Código do cliente |
| 'purchase_client_corporate_name' |  varchar(255)   | `true`  |                 Razão social |
| 'purchase_client_fancy_name'     |  varchar(255)   | `true`  |                   Prescritor |
| 'purchase_client_document'       |  varchar(255)   |         |                  CPF ou CNPJ |
| 'purchase_client_status'         |   varchar(10)   |         |            Status do cliente |
| 'purchase_client_state'          |   varchar(2)    | `true`  |                UF do cliente |
| 'purchase_client_board'          |   varchar(30)   | `true`  |          Conselho do cliente |
| 'purchase_tracking'              |   varchar(50)   |         | Código de rastreio do pedido |
| 'purchase_number'                |       int       | `true`  |             Número do pedido |
| 'purchase_payment'               |   varchar(50)   | `true`  |  Meio de pagamento do pedido |
| 'purchase_value'                 |  decimal(10,2)  | `true`  |              Valor do pedido |
| 'purchase_observation'           |      text       |         |         Observação do pedido |
| 'created_at'                     |    timestamp    |         |              Data de criação |
| 'updated_at'                     |    timestamp    |         |   Data da última atualização |
| 'purchase_client_group'          |  varchar(100)   |         |             Grupo do cliente |
| 'purchase_doc'                   |       int       |         |        Nota fiscal do pedido |
| 'purchase_ieptb'                 |   tinyint(1)    |         |                              |
| 'purchase_irs'                   |   tinyint(1)    |         |                              |
| 'purchase_late_cob'              |   tinyint(1)    |         |                              |
| 'purchase_itau'                  |   tinyint(1)    |         |                              |
| 'purchase_no_restriction'        |   tinyint(1)    |         |                              |
| 'purchase_coop_seller'           | bigint unsigned |         |   Vendedor externo do pedido |
