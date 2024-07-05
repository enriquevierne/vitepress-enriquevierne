---
outline: [2, 6]
---

# Módulo Financeiro

::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::

## Busca 5 clientes correspondentes a pesquisa <Badge type="tip" text="GET" />
```
Route: financial.customerSearch
URL: 'financial/customerSearch' 
```
## Retornar tela de feriados <Badge type="tip" text="GET" />
```
Route: holidays.index
URL: 'holidays' 
```
## Adicionar um feriado <Badge type="info" text="POST" />
```
Route: holidays.store
URL: 'holidays' 
```
## Retornar tela de adição de usuários <Badge type="tip" text="GET" />
```
Route: holidays.create
URL: 'holidays/create' 
```
## Retornar tela de visualição de um pedido <Badge type="tip" text="GET" />
```
Route: holidays.show
URL: 'holidays/{holiday}' 
```
## Retornar tela com todos os boletos <Badge type="tip" text="GET" />
```
Route: installments.index
URL: 'installments' 
```
## Altera status de um boleto <Badge type="info" text="POST" />
```
Route: installments.changeStatus
URL: 'installments/changeStatus/{installment}' 
```
## Retornar tela de adição de um boleto <Badge type="tip" text="GET" />
```
Route: installments.create
URL: 'installments/create' 
```
## Enviar arquivos de remessa do banco Itaú <Badge type="info" text="POST" />
```
Route: installments.previewItau
URL: 'installments/previewItau' 
```
## Retornar tela com todos os boletos importados do arquivo de remessa do banco Itaú <Badge type="GET" text="GET" />
```
Route: installments.get_previewItau
URL: 'installments/previewItau' 
```
## Enviar arquivos de remessa do banco Unicred <Badge type="info" text="POST" />
```
Route: installments.previewUnicred
URL: 'installments/previewUnicred' 
```
## Retornar tela com todos os boletos importados do arquivo de remessa do banco Unicred <Badge type="GET" text="GET" />
```
Route: installments.get_previewUnicred
URL: 'installments/previewUnicred' 
```
## Adiciona todos os boletos do arquivo de remessa do banco Itaú <Badge type="info" text="POST" />
```
Route: installments.storeItau
URL: 'installments/storeItau' 
```
## Adiciona todos os boletos do arquivo de remessa do banco Unicred <Badge type="info" text="POST" />
```
Route: installments.storeUnicred
URL: 'installments/storeUnicred' 
```
## Retornar tela com todos os pedidos faturados do dia <Badge type="tip" text="GET" />
```
Route: purchases.finCheckout
URL: 'purchases/finCheckout' 
```
## Retornar tela com todos os pedidos para serem recebidos no setor financeiro <Badge type="GET" text="GET" />
```
Route: purchases.indexProcess
URL: 'purchases/indexProcess' 
```
## Mudar status de venda para financeiro, pendência, ou pré cancelado <Badge type="info" text="POST" />
```
Route: purchases.storeProcess
URL: 'purchases/process/{purchase?}' 
```
## Retornar tela de visualização do pedido no financeiro <Badge type="tip" text="GET" />
```
Route: purchases.createProcess
URL: 'purchases/process/{purchase}' 
```
## Adicionar nota fiscal a um pedido <Badge type="info" text="POST" />
```
Route: purchases.storeDoc
URL: 'purchases/process/{purchase}/doc' 
```
