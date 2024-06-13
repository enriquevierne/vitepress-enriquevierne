---
outline: [1, 6]
---

# BiometikPurchaseProduct

::: info Descrição
Nesta página podemos ver o model da tabela `biometik_purchase_products`.
:::

### Model

| Coluna                 |      Tipo       | NOTNULL |                    Descrição |
| ---------------------- | :-------------: | :-----: | ---------------------------: |
| 'id'                   | bigint unsigned |  `true`   | Identificador único e serial |
| 'biometik_purchase_id' | bigint unsigned |  `true`   |                 ID do pedido |
| 'biometik_product_id'  | bigint unsigned |  `true`   |                ID do produto |
| 'quantity'             |       int       |  `true`   |        Quantidade do produto |
| 'price'                |  double(10,2)   |  `true`   |             Preço do produto |
| 'unit_price'           |  decimal(10,2)  |  `true`   |    Preço unitário do produto |
| 'discount'             |  double(10,2)   |  `true`   |          Desconto do produto |
| 'total'                |  double(10,2)   |  `true`   |       Valor total do produto |
| 'created_at'           |    timestamp    |         |              Data de criação |
| 'updated_at'           |    timestamp    |         |    Data da última atualização |
