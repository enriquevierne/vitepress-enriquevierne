---
outline: deep
---

# Módulo Biometik

## Adicionar produto a um pedido

##### Rota [/biometik/purchases/{id}/purchaseProducts/create](http://127.0.0.1:8000/biometik/purchases/1129/purchaseProducts/create)

### Descrição

Esta página é responsável pela adição de produtos a um pedido da Biometik.

### Props

```js
const props = defineProps(["purchase", "products"]);
```

::: details purchases

```js
client_address_id: 37028,
client_board: "CRO 2751",
client_corporate_name: "DRA LARISSA ANDRADE SILVA",
client_document: "693.519.532-20",
client_email: "laraodonto.am@hotmail.com",
client_fancy_name: "DRA LARISSA ANDRADE SILVA",
client_group: "Geral",
client_id: 46426,
client_phone: "92 9140-4222",
client_state: "AM",
client_state_registration: null,
client_status: "Prospect",
coop_id: null,
created_at: "2024-06-03T18:51:38.000000Z",
date: "2024-06-21",
discount: "0.00",
id: 1129,
integration: null,
means_of_payment: "Outra",
means_of_transport: "SEDEX 12",
observation: null,
products:
[
  biometik_product_id: 2750,
  biometik_purchase_id: 1129,
  created_at: "2024-06-12T19:59:58.000000Z",
  discount: "0.00",
  id: 1495,
  price: "194.00",
  product:
     {
      created_at: "2024-02-20T19:45:32.000000Z",
      description: "Microcanulas 27g-50mm",
      id: 2750,
      integration: null,
      name: "27GX50MM",
      price: "194.00",
      updated_at: "2024-02-29T23:18:05.000000Z"
     }
  quantity: 2,
  total: "388.00",
  unit_price: "194.00",
  updated_at: "2024-06-12T19:59:58.000000Z"
]
receipt_number: null,
receipt_total: "0.00",
shipping: "0.00",
status: "Orçamento",
total: "0.00",
tracking: null,
updated_at: "2024-06-07T20:29:13.000000Z",
user: {
  avatar: "avatars/661056f80ca36_banner-welcome.jpg",
  created_at: "2023-08-15T13:32:32.000000Z",
  email: "enrique.vierne@biometil.com",
  email_verified_at: null,
  id: 42,
  name: "Enrique Vierne",
  updated_at: "2024-05-02T20:16:57.000000Z"
}
user_id: 42,
```

```php
'client_id' => 'required|numeric',
'client_address_id' => 'required|numeric',
'client_corporate_name' => 'required|string',
'client_fancy_name' => 'required|string',
'client_state' => 'required|string',
'client_board' => 'required|string',
'client_group' => 'nullable|string',
'client_phone' => 'required|string',
'client_email' => 'nullable|email',
'client_document' => 'required|string',
'client_state_registration' => 'nullable|string',
'tracking' => 'nullable|string',
'coop_id' => 'nullable|exists:users,id',
'date' => 'required|date|after_or_equal:today',
'means_of_transport' => 'required|string',
'means_of_payment' => 'required|string',
'discount' => 'required|numeric',
'total' => 'required|numeric',
'integration' => 'nullable|string',
'observation' => 'nullable|string',
```

:::
::: details products

```js
[
  {
    created_at: "2024-02-20T19:19:23.000000Z",
    description: "Microcanulas 18g-50mm",
    id: 1850,
    integration: null,
    name: "18GX50MM",
    price: "194.00",
    updated_at: "2024-02-20T19:40:27.000000Z",
  },
  {
    created_at: "2024-02-20T19:40:52.000000Z",
    description: "Microcanulas 18g-70mm",
    id: 1870,
    name: "18GX70MM",
    price: "194.00",
    updated_at: "2024-02-20T19:40:52.000000Z",
  },
];
```

```php
'name' => 'required|max:255|unique:biometik_products,name',
'description' => 'nullable|max:255',
'price' => 'required|numeric',
'integration' => 'nullable|max:255',
```

:::

### Ações

```js
import { useForm } from "@inertiajs/vue3";
import { toast } from "vue3-toastify"; //notificação

//requisição post para adição do produto ao pedido
form.post(route("biometik.purchases.purchaseProducts.store", props.purchase), {
  preserveState: false,
  preserveScroll: `true`,
  onSuccess: () => {
    toast.success("Produto adicionado", {
      autoClose: 1500,
      theme: "colored",
    });
  },
  onError: () => {
    toast.error("Oops! Algo deu errado!", {
      autoClose: 1500,
      theme: "colored",
    });
  },
});
```
::: info
Retorna para rota [/biometik/purchases/{id}/purchaseProducts/create](http://127.0.0.1:8000/biometik/purchases/1129/purchaseProducts/create)
:::

### Requisição

#### Corpo

Todos os campos são obrigatórios.

```js
const form = useForm({
  biometik_product_id: null,
  name: null,
  price: null,
  unit_price: null,
  quantity: null,
  discount: 0,
  total: null,
});
```

#### Retorno

```js
biometik_product_id: 2750,
biometik_purchase_id: 1129,
created_at: "2024-06-12T19:59:58.000000Z",
discount: "0.00",
id: 1495,
price: "194.00",
product:
   {
    created_at: "2024-02-20T19:45:32.000000Z",
    description: "Microcanulas 27g-50mm",
    id: 2750,
    integration: null,
    name: "27GX50MM",
    price: "194.00",
    updated_at: "2024-02-29T23:18:05.000000Z"
   }
quantity: 2,
total: "388.00",
unit_price: "194.00",
updated_at: "2024-06-12T19:59:58.000000Z"
```



## Editar produto de um pedido

##### Rota [/biometik/purchases/{id}/purchaseProducts/create](http://127.0.0.1:8000/biometik/purchases/1129/purchaseProducts/create)

### Descrição

Esta página é responsável pela edição de produtos de um pedido da Biometik.

### Props

```js
const props = defineProps(["product"]);
```

::: details product

```js
biometik_product_id: 2750,
biometik_purchase_id: 1129,
created_at: "2024-06-12T19:59:58.000000Z",
discount: "0.00",
id: 1495,
price: "194.00",
product:
   {
    created_at: "2024-02-20T19:45:32.000000Z",
    description: "Microcanulas 27g-50mm",
    id: 2750,
    integration: null,
    name: "27GX50MM",
    price: "194.00",
    updated_at: "2024-02-29T23:18:05.000000Z"
   }
quantity: 2,
total: "388.00",
unit_price: "194.00",
updated_at: "2024-06-12T19:59:58.000000Z"
```


```php
'biometik_product_id' => 'required|exists:biometik_products,id',
'quantity' => 'required|numeric|min:1',
'price' => 'required|numeric|min:0',
'unit_price' => 'required|numeric|min:0',
'discount' => 'required|numeric|min:0',
'total' => 'required|numeric|min:0',
```
:::
### Ações

```js
import { useForm } from "@inertiajs/vue3";
import { toast } from "vue3-toastify"; //notificação

//requisição put para edição do produto de um pedido
form.put(route("biometik.purchases.purchaseProducts.update", [props.purchase, props.product]), {
  onSuccess: () => {
    toast.info("Produto atualizado", {
      autoClose: 1500,
      theme: "colored",
    });
    editMode.value = false;
  },
  onError: () => {
    toast.error("Oops! Algo deu errado!", {
      autoClose: 1500,
      theme: "colored",
    });
  },
});
```
::: info
Retorna para rota [/biometik/purchases/{id}/purchaseProducts/create](http://127.0.0.1:8000/biometik/purchases/1129/purchaseProducts/create)
:::

### Requisição

#### Corpo

Todos os campos são obrigatórios.

```js
const form = useForm({
  biometik_product_id: props.product.id,
  name: props.product.name,
  price: props.product.price,
  unit_price: props.product.unit_price,
  quantity: props.product.quantity ?? null,
  discount: props.product.discount ?? null,
  total: props.product.total ?? null,
});
```

#### Retorno

```js
biometik_product_id: 2750,
biometik_purchase_id: 1129,
created_at: "2024-06-12T19:59:58.000000Z",
discount: "0.00",
id: 1495,
price: "194.00",
product:
   {
    created_at: "2024-02-20T19:45:32.000000Z",
    description: "Microcanulas 27g-50mm",
    id: 2750,
    integration: null,
    name: "27GX50MM",
    price: "194.00",
    updated_at: "2024-02-29T23:18:05.000000Z"
   }
quantity: 2,
total: "388.00",
unit_price: "194.00",
updated_at: "2024-06-12T19:59:58.000000Z"
```

