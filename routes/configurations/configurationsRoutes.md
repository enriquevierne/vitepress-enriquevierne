---
outline: [2, 6]
---

# Módulo Configurações

::: info Descrição
Nesta tela podemos ver a lista de rotas de requisições permitidas neste módulo.
:::

## Retornar tela da tv <Badge type="tip" text="GET" />
```
Route: tv.index
URL: 'tv' 
```


## Retornar tela de edição das configurações da tv <Badge type="tip" text="GET" />
```
Route: tv.edit
URL: 'tv/{tvConfig}' 
```
## Atualizar as configurações da tv <Badge type="warning" text="PUT" />
```
Route: tv.update
URL: 'tv/{tvConfig}' 
```

## Retornar tela com todos os usuários <Badge type="tip" text="GET" />
```
Route: users.index
URL: 'users' 
```

## Adicionar um usuário <Badge type="info" text="POST" />
```
Route: users.store
URL: 'users' 
```

## Retornar tela de adição de usuário <Badge type="tip" text="GET" />
```
Route: users.create
URL: 'users/create' 
```

## Retornar tela de visualização de um usuário <Badge type="tip" text="GET" />
```
Route: users.show
URL: 'users/{user}' 
```

## Atualizar um usuário <Badge type="warning" text="PATCH" />
```
Route: users.update
URL: 'users/{user}' 
```

## Excluir um usuário <Badge type="danger" text="DELETE" />
```
Route: users.destroy
URL: 'users/{user}' 
```

## Retornar tela de edição de um usuário <Badge type="tip" text="GET" />
```
Route: users.edit
URL: 'users/{user}/edit' 
```

## Atualizar a senha do usuário <Badge type="warning" text="PUT" />
```
Route: password.update
URL: 'password' 
```

## Adicionar uma permissão <Badge type="info" text="POST" />
```
Route: permissions.store
URL: 'permissions' 
```

## Excluir uma permissão <Badge type="danger" text="DELETE" />
```
Route: permissions.destroy
URL: 'permissions/{permission}' 
```

## Retornar tela com todas as permissões <Badge type="tip" text="GET" />
```
Route: permissions.index
URL: 'permissions/{user}' 
```

## Retornar tela de edição de um usuário <Badge type="tip" text="GET" />
```
Route: profile.edit
URL: 'profile' 
```

## Atualizar informações de um usuário <Badge type="info" text="POST" />
```
Route: profile.update
URL: 'profile' 
```

## Atualiza o feriado <Badge type="warning" text="PATCH" />
```
Route: holidays.update
URL: 'holidays/{holiday}' 
```
 
## Excluir de um feriado <Badge type="danger" text="DELETE" />
```
Route: holidays.destroy
URL: 'holidays/{holiday}' 
```

## Retornar tela de edição de um feriado <Badge type="tip" text="GET" />
```
Route: holidays.edit
URL: 'holidays/{holiday}/edit' 
```

