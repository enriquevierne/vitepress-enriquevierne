---
outline: [1, 6]
---

# BiometikProduct

::: info Descrição
Nesta página podemos ver o model da tabela `biometik_products`.
:::

### Model

| Coluna        |       Tipo       | NOTNULL |                                    Descrição |
| ------------- | :--------------: | :-----: | -------------------------------------------: |
| 'id'          | bigint unsigned |  `true`   |                 Identificador único e serial |
| 'name'        |  varchar(255)   |  `true`   |                              Nome do produto |
| 'description' |  varchar(255)   |         |                         Descrição do produto |
| 'price'       |  decimal(8,2)   |  `true`   |                             Preço do produto |
| 'integration' |  varchar(255)   |         | Código de integração com sistema da biometik |
| 'created_at'  |    timestamp    |         |                              Data de criação |
| 'updated_at'  |    timestamp    |         |                    Data da última atualização |
