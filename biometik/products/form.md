---
outline: deep
---

# Módulo Biometik

## Cadastrar produto

##### Rota [/biometik/products/create](http://127.0.0.1:8000/biometik/products/create)

### Descrição

Esta página é responsável pela criação de produtos da Biometik.

### Props

```js
//nenhuma prop recebida nesta tela
```

### Ações

```js
import { useForm } from "@inertiajs/vue3";
import { toast } from "vue3-toastify"; //notificação

//requisição post para criação do produto
form.post(route("biometik.products.store"), {
  onSuccess: () => {
    toast.success("Produto cadastrado", {
      autoClose: 1500,
      theme: "colored",
    });
    clear();
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
Retorna para rota [/biometik/products](http://127.0.0.1:8000/biometik/products)
:::

### Requisição

#### Corpo

Campos obrigatórios `name` e `price`.

```js
const form = useForm({
  user_id: props.product.user_id ?? null,
  name: props.product.name ?? null,
  price: props.product.price ?? null,
  integration: props.product.integration ?? null,
  description: props.product.description ?? null,
});
```

#### Retorno

```js
created_at: "2024-02-20T19:19:23.000000Z";
description: "Microcanulas 18g-50mm";
id: 1850;
integration: null;
name: "18GX50MM";
price: "194.00";
updated_at: "2024-02-20T19:40:27.000000Z";
```

## Editar produto

##### Rota [/biometik/products/{id}/edit](http://127.0.0.1:8000/biometik/products/1850/edit)

### Descrição

Esta página é responsável pela edição de produtos da Biometik.

### Props

```js
const props = defineProps(["product"]);
```

::: details product

```js
created_at: "2024-02-20T19:19:23.000000Z";
description: "Microcanulas 18g-50mm";
id: 1850;
integration: null;
name: "18GX50MM";
price: "194.00";
updated_at: "2024-02-20T19:40:27.000000Z";
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

//requisição put para edição do produto
form.put(route("biometik.products.update", props.product), {
  onSuccess: () => {
    toast.success("Produto atualizado", {
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
Retorna para rota [/biometik/products](http://127.0.0.1:8000/biometik/products)
:::

### Requisição

#### Corpo

Campos obrigatórios `name` e `price`.

```js
const form = useForm({
  user_id: props.product.user_id ?? null,
  name: props.product.name ?? null,
  price: props.product.price ?? null,
  integration: props.product.integration ?? null,
  description: props.product.description ?? null,
});
```

#### Retorno

```js
created_at: "2024-02-20T19:19:23.000000Z";
description: "Microcanulas 18g-50mm";
id: 1850;
integration: null;
name: "18GX50MM";
price: "194.00";
updated_at: "2024-02-20T19:40:27.000000Z";
```


