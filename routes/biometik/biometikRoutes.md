---
outline: [1, 6]
---

# Módulo Biometik

::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::

## Produto

:::details CREATE <Badge type="info" text="POST" />

Adicionar produto

```
Route: biometik.products.store
URL: 'biometik/products'
```

:::

:::details READ <Badge type="tip" text="GET" />

Retornar tela index de produto

```
Route: biometik.products.index
URL: 'biometik/products'
```

Retornar tela de adição de produto

```
Route: biometik.products.create
URL: 'biometik/products/create'
```

Retornar tela de visualizar um produto

```
Route: biometik.products.show
URL: 'biometik/products/{product}'
```

Retornar tela de edição de um produto

```
Route: biometik.products.edit
URL: 'biometik/products/{product}/edit'
```

:::

:::details UPDATE <Badge type="warning" text="PUT/PATCH" />

Atualiza um produto

```
Route: biometik.products.update
URL: 'biometik/products/{product}'
```

:::

:::details DESTROY <Badge type="danger" text="DELETE" />

Excluir um produto

```
Route: biometik.products.destroy
URL: 'biometik/products/{product}'
```

:::

## Pedido

:::details CREATE <Badge type="info" text="POST" />
Envio de arquivos no pedido

```
Route: biometik.biometikPurchaseFiles.store
URL: 'biometik/biometikPurchaseFiles'
```

Adicionar um pedido

```
Route: biometik.purchases.store
URL: 'biometik/purchases'
```

Troca o dono do pedido

```
Route: biometik.purchases.changeOwner
URL: 'biometik/purchases/{purchase}/changeOwner'
```

Adicionar desconto de um pedido

```
Route: biometik.purchases.discount
URL: 'biometik/purchases/{purchase}/discount'
```

Adiciona número de nota fiscal e código de integração em um pedido

```
Route: biometik.purchases.store.process
URL: 'biometik/purchases/{purchase}/process'
```

Adiciona frete a um pedido

```
Route: biometik.purchases.shipping
URL: 'biometik/purchases/{purchase}/shipping'
```

Altera o status de um pedido

```
Route: biometik.purchases.status
URL: 'biometik/purchases/{purchase}/status'
```

Adiciona código de rastreio em pedido

```
Route: biometik.purchases.tracking
URL: 'biometik/purchases/{purchase}/tracking'
```

:::
:::details READ <Badge type="tip" text="GET" />

Retornar tela index de pedidos

```
Route: biometik.purchases.index
URL: 'biometik/purchases'
```

Retornar págína de criação de um pedido

```
Route: biometik.purchases.create
URL: 'biometik/purchases/create'
```

Retornar tela de exportação de um pedido

```
Route: biometik.purchases.export
URL: 'biometik/purchases/export'
```

Retornar tela index de pedidos com status venda

```
Route: biometik.purchases.index.process
URL: 'biometik/purchases/process'
```

Retornar tela de expedição

```
Route: biometik.purchases.view.tracking
URL: 'biometik/purchases/tracking'
```

Retornar tela de visualização de um pedido

```
Route: biometik.purchases.show
URL: 'biometik/purchases/{purchase}'
```

Retornar tela de trocar o dono do pedido

```
Route: biometik.purchases.changeOwnerView
URL: 'biometik/purchases/{purchase}/changeOwner'
```

Retornar tela de edição de um pedido

```
Route: biometik.purchases.edit
URL: 'biometik/purchases/{purchase}/edit'
```

Retornar tela de impressão de um pedido

```
Route: biometik.purchases.print
URL: 'biometik/purchases/{purchase}/print'
```

Retornar tela de visualização de um pedido no financeiro

```
Route: biometik.purchases.process
URL: 'biometik/purchases/{purchase}/process'
```

:::

:::details UPDATE <Badge type="warning" text="PUT" />
Atualiza um pedido

```
Route: biometik.purchases.update
URL: 'biometik/purchases/{purchase}'
```

:::

:::details DESTROY <Badge type="danger" text="DELETE" />
Excluir de arquivos no pedido

```
Route: biometik.biometikPurchaseFiles.destroy
URL: 'biometik/biometikPurchaseFiles/{biometikPurchaseFile}'
```

Excluir de um pedido

```
Route: biometik.purchases.destroy
URL: 'biometik/purchases/{purchase}'
```

:::

## Produto em um pedido

:::details READ <Badge type="tip" text="GET" />

Retornar tela de adição de produto a um pedido

```
Route: biometik.purchases.purchaseProducts.create
URL: 'biometik/purchases/{purchase}/purchaseProducts/create'
```

:::

:::details CREATE <Badge type="info" text="POST" />
Adiciona produto em um pedido

```
Route: biometik.purchases.purchaseProducts.store
URL: 'biometik/purchases/{purchase}/purchaseProducts'
```

:::

:::details UPDATE <Badge type="warning" text="PUT/PATCH" />
Atualiza um produto em um pedido

```
Route: biometik.purchases.purchaseProducts.update
URL: 'biometik/purchases/{purchase}/purchaseProducts/{purchaseProduct}'
```

:::

:::details DESTROY <Badge type="danger" text="DELETE" />
Excluir um produto de um pedido

```
Route: biometik.purchases.purchaseProducts.destroy
URL: 'biometik/purchases/{purchase}/purchaseProducts/{purchaseProduct}'
```

:::
