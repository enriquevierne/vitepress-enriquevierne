---
outline: [1, 6]
---

# Módulo Biometik

::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::



### Envio de arquivos no pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.biometikPurchaseFiles.store
URL: 'biometik/biometikPurchaseFiles' 
```
---
### Excluir de arquivos no pedido da Biometik <Badge type="danger" text="DELETE" />
```
Route: biometik.biometikPurchaseFiles.destroy
URL: 'biometik/biometikPurchaseFiles/{biometikPurchaseFile}' 
```
---
### Retornar tela index de produtos da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.products.index
URL: 'biometik/products' 
```
---
### Adicionar produtos da Biometik <Badge type="info" text="POST" />
```
Route: biometik.products.store
URL: 'biometik/products' 
```
---
### Retornar tela de adição de produtos da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.products.create
URL: 'biometik/products/create' 
```
---
### Retornar tela de visualizar um produto da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.products.show
URL: 'biometik/products/{product}' 
```
---
### Atualiza um produto da Biometik <Badge type="warning" text="PUT" />
```
Route: biometik.products.update
URL: 'biometik/products/{product}' 
```
### Excluir de um produto da Biometik <Badge type="danger" text="DELETE" />
```
Route: biometik.products.destroy
URL: 'biometik/products/{product}' 
```
---
### Retornar tela de edição de um produto da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.products.edit
URL: 'biometik/products/{product}/edit' 
```
---
### Retornar tela index de pedidos da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.index
URL: 'biometik/purchases' 
```
---
### Adicionar um pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.store
URL: 'biometik/purchases' 
```
---
### Retornar págína de criação de um pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.create
URL: 'biometik/purchases/create' 
```
---
### Retornar tela de exportação de um pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.export
URL: 'biometik/purchases/export' 
```
---
### Retornar tela index de pedidos da Biometik com status venda <Badge type="tip" text="GET" />
```
Route: biometik.purchases.index.process
URL: 'biometik/purchases/process' 
```
---
### Retornar tela de expedição da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.view.tracking
URL: 'biometik/purchases/tracking' 
```
---
### Retornar tela de visualização de um pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.show
URL: 'biometik/purchases/{purchase}' 
```
---
### Atualiza um pedido da Biometik <Badge type="warning" text="PUT" />
```
Route: biometik.purchases.update
URL: 'biometik/purchases/{purchase}' 
```
--- 
### Excluir de um pedido da Biometik <Badge type="danger" text="DELETE" />
```
Route: biometik.purchases.destroy
URL: 'biometik/purchases/{purchase}' 
```
---
### Retornar tela de trocar o dono do pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.changeOwnerView
URL: 'biometik/purchases/{purchase}/changeOwner' 
```
---
### Troca o dono do pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.changeOwner
URL: 'biometik/purchases/{purchase}/changeOwner' 
```
---
### Adicionar desconto de um pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.discount
URL: 'biometik/purchases/{purchase}/discount' 
```
---
### Retornar tela de edição de um pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.edit
URL: 'biometik/purchases/{purchase}/edit'
```
---
### Retornar tela de impressão de um pedido da Biometik <Badge type="tip" text="GET" />
```
Route: biometik.purchases.print
URL: 'biometik/purchases/{purchase}/print' 
```
---
### Retornar tela de visualização de um pedido da Biometik no financeiro <Badge type="tip" text="GET" />
```
Route: biometik.purchases.process
URL: 'biometik/purchases/{purchase}/process' 
```
---
Adiciona número de nota fiscal e código de integração em um pedido da Biometik <Badge type="info" ### text="POST" />
```
Route: biometik.purchases.store.process
URL: 'biometik/purchases/{purchase}/process' 
```
---
### Adiciona produtos em um pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.purchaseProducts.store
URL: 'biometik/purchases/{purchase}/purchaseProducts' 
```
---
### Retornar tela de adição de produtos a um pedido da Biometik  <Badge type="tip" text="GET" />
```
Route: biometik.purchases.purchaseProducts.create
URL: 'biometik/purchases/{purchase}/purchaseProducts/create' 
```
---
### Atualiza um produto em um pedido da biometik <Badge type="warning" text="PUT" />
```
Route: biometik.purchases.purchaseProducts.update
URL: 'biometik/purchases/{purchase}/purchaseProducts/{purchaseProduct}' 
```
--- 
### Excluir de um produto em um pedido da Biometik <Badge type="danger" text="DELETE" />
```
Route: biometik.purchases.purchaseProducts.destroy
URL: 'biometik/purchases/{purchase}/purchaseProducts/{purchaseProduct}' 
```
---
### Adiciona frete a um pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.shipping
URL: 'biometik/purchases/{purchase}/shipping' 
```
---
### Altera o status de um pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.status
URL: 'biometik/purchases/{purchase}/status' 
```
---
### Adiciona código de rastreio em pedido da Biometik <Badge type="info" text="POST" />
```
Route: biometik.purchases.tracking
URL: 'biometik/purchases/{purchase}/tracking' 
```
---