---
outline: [1, 6]
---

# BiometikProduct

::: info Descrição 
Nesta página podemos ver as colunas da tabela, tipo de dados, se é nulo ou não, e a descrição de cada coluna.
:::

### Model

| Coluna        |       Tipo       | NOTNULL |                                    Descrição |
| ------------- | :--------------: | :-----: | -------------------------------------------: |
| 'id'          | bigint unsigned |  true   |                 Identificador único e serial |
| 'name'        |  varchar(255)   |  true   |                              Nome do produto |
| 'description' |  varchar(255)   |         |                         Descrição do produto |
| 'price'       |  decimal(8,2)   |  true   |                             Preço do produto |
| 'integration' |  varchar(255)   |         | Código de integração com sistema da biometik |
| 'created_at'  |    timestamp    |         |                              Data de criação |
| 'updated_at'  |    timestamp    |         |                    Data da última atualização |
