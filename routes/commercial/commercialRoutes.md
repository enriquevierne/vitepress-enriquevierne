---
outline: [2, 6]
---

# Módulo Comercial

::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::

### Retornar tela de comissão completa <Badge type="tip" text="GET" />
```
Route: commissionReports.full
URL: 'commissionReports/full' 
```
---
### Retornar tela de comissão simples <Badge type="tip" text="GET" />
```
Route: commissionReports.simple
URL: 'commissionReports/simple' 
```
---
### Retornar tela com todas as comissões <Badge type="tip" text="GET" />
```
Route: commissions.index
URL: 'commissions' 
```
---
### Adicionar comissão <Badge type="info" text="POST" />
```
Route: commissions.store
URL: 'commissions' 
```
---
### Retornar tela de adição de comissões <Badge type="tip" text="GET" />
```
Route: commissions.create
URL: 'commissions/create' 
```
---
### Retornar tela de visualização da comissão <Badge type="tip" text="GET" />
```
Route: commissions.show
URL: 'commissions/{commission}' 
```
---
### Atualiza uma comissão <Badge type="warning" text="PATCH" />
```
Route: commissions.update
URL: 'commissions/{commission}' 
```
--- 
### Excluir de uma comissão <Badge type="danger" text="DELETE" />
```
Route: commissions.destroy
URL: 'commissions/{commission}' 
```
---
### Retornar tela de edição de uma comissão <Badge type="tip" text="GET" />
```
Route: commissions.edit
URL: 'commissions/{commission}/edit' 
```
---
### Retornar tela de metas dos vendedores <Badge type="tip" text="GET" />
```
Route: goals.index
URL: 'goals' 
```
---
### Adicionar uma meta <Badge type="info" text="POST" />
```
Route: goals.store
URL: 'goals' 
```
---
### Retornar tela de adição de uma meta <Badge type="tip" text="GET" />
```
Route: goals.create
URL: 'goals/create' 
```
---
### Retornar tela de exportação de metas <Badge type="tip" text="GET" />
```
Route: goals.export
URL: 'goals/export' 
```
---
### Retornar tela de visualização de uma meta <Badge type="tip" text="GET" />
```
Route: goals.show
URL: 'goals/{goal}' 
```
---
### Atualiza uma meta <Badge type="warning" text="PATCH" />
```
Route: goals.update
URL: 'goals/{goal}' 
```
--- 
### Excluir de uma meta <Badge type="danger" text="DELETE" />
```
Route: goals.destroy
URL: 'goals/{goal}' 
```
---
### Retornar tela de edição de uma meta <Badge type="tip" text="GET" />
```
Route: goals.edit
URL: 'goals/{goal}/edit' 
```
---
### Adicionar um arquivo em um pedido <Badge type="info" text="POST" />
```
Route: purchaseFiles.store
URL: 'purchaseFiles' 
```
---
### Excluir um arquivo de um pedido <Badge type="danger" text="DELETE" />
```
Route: purchaseFiles.destroy
URL: 'purchaseFiles/{purchaseFile}' 
```
---
### Retornar tela com todos os pedidos <Badge type="tip" text="GET" />
```
Route: purchases.index
URL: 'purchases' 
```
---
### Criar um pedido <Badge type="info" text="POST" />
```
Route: purchases.store
URL: 'purchases' 
```
---
### Retornar tela para mudar dono do pedido <Badge type="tip" text="GET" />
```
Route: purchases.changeOwnerView
URL: 'purchases/changeOwner/{purchase}' 
```
---
### Alterar dono do pedido <Badge type="info" text="POST" />
```
Route: purchases.changeOwner
URL: 'purchases/changeOwner/{purchase}' 
```
---
### Retornar tela que verifica se o usuário que adicionou o pedido é o dono do pedido <info type="GET"  />text="GET"
```
Route: purchases.checkUser
URL: 'purchases/checkUser' 
```
---
### Retornar tela de adição de um pedido <Badge type="tip" text="GET" />
```
Route: purchases.create
URL: 'purchases/create' 
```
---
### Retornar tela de exportação do pedido <Badge type="tip" text="GET" />
```
Route: purchases.export
URL: 'purchases/export' 
```
---
### Retornar tela de visualização de um pedido <Badge type="tip" text="GET" />
```
Route: purchases.show
URL: 'purchases/{purchase}' 
```
---
### Atualizar um pedido  <Badge type="warning" text="PATCH" />
```
Route: purchases.update
URL: 'purchases/{purchase}' 
```
---
### Excluir um pedido <Badge type="danger" text="DELETE" />
```
Route: purchases.destroy
URL: 'purchases/{purchase}' 
```
---
### Retornar tela de edição de um pedido <Badge type="tip" text="GET" />
```
Route: purchases.edit
URL: 'purchases/{purchase}/edit' 
```
---
### Retornar tela de impressão de um pedido <Badge type="tip" text="GET" />
```
Route: purchases.print
URL: 'purchases/{purchase}/print' 
```
---
### Retornar PDF de comissão completa <Badge type="tip" text="GET" />
```
Route: reports.commissionFullPDF
URL: 'reports/commissionFullPDF' 
```
---
### Retornar PDF de comissão simples <Badge type="tip" text="GET" />
```
Route: reports.commissionSimplePDF
URL: 'reports/commissionSimplePDF' 
```
---
### Retornar XLS de comissão simples <Badge type="tip" text="GET" />
```
Route: reports.commissionSimpleXLS
URL: 'reports/commissionSimpleXLS' 
```
---
### Retornar tela de comissão por grupo <Badge type="tip" text="GET" />
```
Route: reports.groupCommissions
URL: 'reports/groupCommissions' 
```
---
### Retornar tela de exportação da comissão por grupo <Badge type="tip" text="GET" />
```
Route: reports.exportGroupCommissions
URL: 'reports/groupCommissions/export' 
```
---
### Retornar tela de ranking de clientes <Badge type="tip" text="GET" />
```
Route: reports.rankClientPurchases
URL: 'reports/rankClientPurchases' 
```
---
### Retornar tela de ranking de produtos <Badge type="tip" text="GET" />
```
Route: reports.rankProductPurchases
URL: 'reports/rankProductPurchases' 
```
---
### Retornar PDF do ranking de produtos <Badge type="tip" text="GET" />
```
Route: reports.rankProductPurchasesPDF
URL: 'reports/rankProductPurchasesPDF' 
```
---












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
### Atualiza um produto da Biometik <Badge type="warning" text="PATCH" />
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
### Atualiza um pedido da Biometik <Badge type="warning" text="PATCH" />
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
### Adiciona número de nota fiscal e código de integração em um pedido da Biometik <Badge type="info"  />text="POST"
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
### Atualiza um produto em um pedido da biometik <Badge type="warning" text="PATCH" />
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