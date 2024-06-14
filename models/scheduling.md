---
outline: [1, 6]
---

# Scheduling

::: info Descrição
Nesta página podemos ver o model da tabela `schedulings`.
:::

### Model

| Coluna                  |      Tipo       | NOTNULL |                             Descrição |
| ----------------------- | :-------------: | :-----: | ------------------------------------: |
| 'id'                    | bigint unsigned | `true`  |          Identificador único e serial |
| 'user_id'               | bigint unsigned | `true`  |          ID do usuário dono do pedido |
| 'datetime'              |    timestamp    | `true`  |                   Data do compromisso |
| 'label'                 |  varchar(255)   |         |                   Tipo do compromisso |
| 'client_corporate_name' |  varchar(255)   |         |                          Razão social |
| 'client_city'           |  varchar(255)   |         |                 Cidade do compromisso |
| 'client_state'          |   varchar(2)    |         |                     UF do compromisso |
| 'client_purchase'       |   tinyint(1)    |         | Houve venda (`true`) se não (`false`) |
| 'client_feedback'       |  varchar(255)   |         |               Feedback do compromisso |
| 'observation'           |      text       |         |             Observação do compromisso |
| 'created_at'            |    timestamp    |         |                       Data de criação |
| 'updated_at'            |    timestamp    |         |            Data da última atualização |
