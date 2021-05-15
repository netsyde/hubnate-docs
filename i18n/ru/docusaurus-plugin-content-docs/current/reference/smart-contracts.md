---
id: smart-contracts
title: Обзор смарт-контрактов
skug: /reference
---
Hubnate - это система, состоящая из множества смарт-контрактов.

## Ядро

>[**Исходный код ядра**](https://github.com/netsyde/hubnate-contract)

Ядро включает в себя систему, обеспечивающую функционал Hubnate.


### Hubnate

>[**Hubnate Reference**](/reference/core/Hubnate) 

Контракт служит для создания новых пулов, совершения донатов, а также для их распределения.

### Chance Token

>[**Chance Token Reference**](/reference/core/ChanceToken).

Контракт, позволяющий создавать специальные ERC-20-токены, необходимые для распределения шансов.

## Random Number Consumer

>[**Random Number Consumer Reference**](/reference/core/RandomNumberConsumer).

Контракт, позволяющий взаимодействовать с VRF-координатором от Chainlink. Требуется для совершения операций с рандомными числами.