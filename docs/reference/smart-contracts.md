---
id: smart-contracts
title: Review of smart contracts
slug: /reference
--- 

Hubnate is a system consisting of many smart contracts.

## Core

>[**Core source code**](https://github.com/netsyde/hubnate-contract)

The core includes a system that provides the functionality of Hubnate.


### Hubnate

>[**Hubnate Reference**](/reference/core/Hubnate)

The contract is used to create new pools, make donations, and distribute them.

### Chance Token

>[**Chance Token Reference**](/reference/core/ChanceToken).

A contract that allows you to create special ERC-20 tokens that are necessary for the distribution of chances.

## Random Number Consumer

>[**Random Number Consumer Reference**](/reference/core/RandomNumberConsumer).

A contract that allows you to interact with the VRF coordinator from Chainlink. Required for performing operations with random numbers.