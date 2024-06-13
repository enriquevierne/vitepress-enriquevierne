---
outline: [1, 6]
---

# Commission

::: info Descrição
Nesta página podemos ver o model da tabela `commissions`.
:::

### Model

| Coluna                       |      Tipo       | NOTNULL |                               Descrição |
| ---------------------------- | :-------------: | :-----: | --------------------------------------: |
| 'id'                         | bigint unsigned |  `true`   |            Identificador único e serial |
| 'user_id'                    | bigint unsigned |  `true`   |          ID do usuário dono da comissão |
| 'commission_is_additional'   |   tinyint(1)    |  `true`   |  Acréscimo(`true`) ou desconto(`false`) |
| 'commission_month'           |       int       |  `true`   |                         Mês da comissão |
| 'commission_year'            |       int       |  `true`   |                         Ano da comissão |
| 'commission_value'           |  decimal(8,2)   |  `true`   |                       Valor da comissão |
| 'commission_purchase_number' |       int       |         | Número do pedido relacionado a comissão |
| 'commission_description'     |  varchar(255)   |  `true`   |                   Descrição da comissão |
| 'created_at'                 |    timestamp    |         |                         Data de criação |
| 'updated_at'                 |    timestamp    |         |               Data da última atualização |
| 'commission_observation'     |      text       |         |                  Observação da comissão |
