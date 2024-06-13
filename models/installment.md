---
outline: [1, 6]
---

# Installment

::: info Descrição
Nesta página podemos ver o model da tabela `installments`.
:::

### Model

| Coluna               |      Tipo       | NOTNULL |                        Descrição |
| -------------------- | :-------------: | :-----: | -------------------------------: |
| 'id'                 | bigint unsigned |  `true`   |     Identificador único e serial |
| 'document'           |   varchar(20)   |  `true`   |                 Número do boleto |
| 'bank'               |  varchar(255)   |         |                    Nome do banco |
| 'expires_at'         |      date       |  `true`   |               Data de vencimento |
| 'paid_at'            |      date       |         |                Data do pagamento |
| 'value'              |  decimal(10,2)  |  `true`   |                  Valor do boleto |
| 'status'             |   varchar(20)   |  `true`   |                 Status do boleto |
| 'observation'        |      text       |         |             Observação do boleto |
| 'created_at'         |    timestamp    |         |                  Data de criação |
| 'updated_at'         |    timestamp    |         |       Data da última atualização |
| 'installment_number' |       int       |         | Número da parcela da nota fiscal |
| 'issue_at'           |      date       |  `true`   |        Data de emissão do boleto |
| 'client_document'    |  varchar(255)   |  `true`   |                      CNPJ ou CPF |
| 'client_name'        |  varchar(255)   |  `true`   |                       Prescritor |
