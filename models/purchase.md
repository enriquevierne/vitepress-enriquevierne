---
outline: [1, 6]
---

# BiometikPurchase

::: info Descrição
Nesta página podemos ver o model da tabela `biometik_purchases`.
:::

### Model

| Coluna                      |       Tipo       | NOTNULL |                                    Descrição |
| --------------------------- | :--------------: | :-----: | -------------------------------------------: |
| 'id'                        | bigint unsigned |  `true`   |                 Identificador único e serial |
| 'client_id'                 | bigint unsigned |  `true`   |                            ID do cliente |
| 'client_address_id'         |       int       |  `true`   |                ID do endereço do cliente |
| 'client_corporate_name'     |  varchar(255)   |  `true`   |                              Nome do cliente |
| 'client_fancy_name'         |  varchar(255)   |  `true`   |                                   Prescritor |
| 'client_document'           |  varchar(255)   |         |                                  CNPJ ou CPF |
| 'client_state_registration' |  varchar(255)   |         |                           Inscrição Estadual |
| 'client_status'             |  varchar(255)   |         |                            Status do cliente |
| 'client_state'              |  varchar(255)   |  `true`   |                                UF do cliente |
| 'client_board'              |  varchar(255)   |  `true`   |                          Conselho do cliente |
| 'client_group'              |  varchar(255)   |         |                             Grupo do cliente |
| 'client_phone'              |  varchar(255)   |         |                          Telefone do cliente |
| 'client_email'              |  varchar(255)   |         |                             Email do cliente |
| 'tracking'                  |  varchar(255)   |         |                           ID de rastreio |
| 'user_id'                   | bigint unsigned |  `true`   |                 ID do usuário dono do pedido |
| 'coop_id'                   | bigint unsigned |         |                       ID do vendedor externo |
| 'date'                      |      date       |  `true`   |                               Data do pedido |
| 'means_of_transport'        |  varchar(255)   |  `true`   |                          Forma de transporte |
| 'means_of_payment'          |  varchar(255)   |  `true`   |                           Forma de pagamento |
| 'receipt_number'            |  varchar(255)   |         |                                  Nota fiscal |
| 'discount'                  |  double(10,2)   |  `true`   |                           Desconto do pedido |
| 'total'                     |  double(10,2)   |  `true`   |                        Valor total do pedido |
| 'receipt_total'             |  decimal(10,2)  |  `true`   |                         Valor da nota fiscal |
| 'status'                    |  varchar(255)   |  `true`   |                             Status do pedido |
| 'integration'               |  varchar(255)   |         | Código de integração com sistema da biometik |
| 'created_at'                |    timestamp    |         |                              Data de criação |
| 'updated_at'                |    timestamp    |         |                    Data da última atualização |
| 'shipping'                  |  decimal(10,2)  |  `true`   |                              Frete do pedido |
| 'observation'               |      text       |         |                         Observação do pedido |
