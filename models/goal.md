---
outline: [1, 6]
---

# Goal

::: info Descrição
Nesta página podemos ver as metas de cada vendedor.
:::

### Model

| Coluna                 |      Tipo       | NOTNULL |                          Descrição |
| ---------------------- | :-------------: | :-----: | ---------------------------------: |
| 'id'                   | bigint unsigned |  true   |       Identificador único e serial |
| 'goal_month'           |       int       |  true   |                        Mês da meta |
| 'goal_year'            |       int       |  true   |                        Ano da meta |
| 'goal_value'           |  decimal(10,2)  |  true   |                      Valor da meta |
| 'user_id'              | bigint unsigned |  true   |         ID do usuário dono da meta |
| 'created_at'           |    timestamp    |         |                    Data de criação |
| 'updated_at'           |    timestamp    |         |         Data da última atualização |
| 'goal_commission_up'   |  decimal(10,2)  |  true   |     % da comissão caso meta atingida |
| 'goal_commission_down' |  decimal(10,2)  |  true   | % da comissão caso meta não atingida |
