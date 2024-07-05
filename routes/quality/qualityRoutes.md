---
outline: [1, 6]
---

# Módulo Qualidade
::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::

## Retornar tela com todas as ordens de produção <Badge type="tip" text="GET" />
```
Route: productionOrders.index
URL: 'productionOrders' 
```
## Criar ordem de produção <Badge type="info" text="POST" />
```
Route: productionOrders.store
URL: 'productionOrders' 
```
## Retornar tela de visualização de uma ordem de produção <Badge type="tip" text="GET" />
```
Route: productionOrders.show
URL: 'productionOrders/{productionOrder}' 
```
## Excluir uma ordem de produção <Badge type="danger" text="DELETE" />
```
Route: productionOrders.destroy
URL: 'productionOrders/{productionOrder}' 
```
## Adicionar um pedido a uma ordem de produção <Badge type="info" text="POST" />
```
Route: productionOrders.productionPurchases.store
URL: 'productionOrders/{productionOrder}/productionPurchases' 
```
## Retornar tela de adição de pedido a uma ordem de produção <Badge type="tip" text="GET" />
```
Route: productionOrders.productionPurchases.create
URL: 'productionOrders/{productionOrder}/productionPurchases/create' 
```
## Excluir um pedido de uma ordem de produção <Badge type="danger" text="DELETE" />
```
Route: productionOrders.productionPurchases.destroy
URL: 'productionOrders/{productionOrder}/productionPurchases/{productionPurchase}' 
```
