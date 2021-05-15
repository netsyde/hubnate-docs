---
id: what-is-hubnate
title: What Is Hubnate
---

## Protocol, Interface

To begin, we should make clear the distinctions between the different areas of "Hubnate", some of which may confuse new users.

* **Netsyde Team**: The team which developed the Hubnate protocol, along with the web interface.
* **The Hubnate Protocol**: A set of permanent, non-renewable smart contracts that allow you to donate to random people and receive donations in the form of ERC-20 tokens in the Binance Smart Chain blockchain.
* **The Hubnate Interface**: A web interface that allows for easy interaction with the Hubnate protocol. The interface is only one of many ways one may interact with the Hubnate protocol. 

The following is a brief overview of the *Hubnate protocol*

## Introduction

The Hubnate protocol is a peer-to-peer cryptocurrency [(**ERC-20 Tokens**)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) donation distribution system on the [**BSC**](https://binance.org/) blockchain. The protocol is implemented as a set of persistent, non-upgradable smart contracts.

## What is the difference from a regular lottery?

In a regular lottery, the prize pool is consolidated in a centralized location, and then distributed after a certain time. In the Hubnate protocol, the donation is immediately distributed randomly, depending on your chance.

## How is donate distributed?

When a user makes a new donation, the Hubnate protocol requests a random number from the outside world. Using this number, a random user is selected from the list of all possible recipients. The higher the chance of receiving a donation, the more records will be associated with a specific user. For example, if one user has a 70% chance, the second has a 20% chance, and the third has a 10% chance, the list of chances will look like this:
```
[1,1,1,1,1,1,1,2,2,3]
```

### Where is the random number requested from?

Since it is impossible to generate a random number in the blockchain, we use "Oracles". Oracles are needed to get something from the outside world. We use oracles [**Chainlink**](https://chain.link/).

### What determines the chance of receiving a donation?

The chance of receiving a donation depends on the number of "Chance Tokens" (CT) on your account. After making a donation from your side, you will be entitled to a certain number of chance tokens.