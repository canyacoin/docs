---
id: smart-contract-standards
title: Smart Contract Standards
sidebar_label: Smart Contracts
---


> Standards for deploying smart contracts on Ethereum for the CanYa Project

## General

1. Comment as per [Solidity standards](https://solidity.readthedocs.io/en/v0.5.0/layout-of-source-files.html#comments) 

## Developer Environment

1. Use `VSCode` with [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension in order to provide Intellisense and force Linting
1. Use the latest [Solc version](https://github.com/ethereum/solidity/releases) or set Solc to version for project
1. Initialise truffle `truffle init` and use folder structure outlined by Truffle
1. Initialise `package.json`, [gitlab-ci.yml](assets/smart-contract/.gitlab-ci.example.yml)(or `travis`) and `.gitignore` files as outlined in [SmartContracts](smart-contract-info.md)
1. Frequently run `Solidity - compile all contracts` functionality to test contract compilation

### Proxies

### Owner

Ensure that all contracts are owned using latest OpenZeppelin `Ownable` implementation

```
// Smart Contract
contract thisContract is Ownable {
}
```

## Testing Environment

1. Create automatically executing unit tests with `truffle` and `gitlab-ci` 
1. Utilise libraries and comprehensively test code, validating using `solidity-coverage`
1. Integration test with [Remix](https://remix.ethereum.org) on Ropsten

## Deploying Mainnet

1. Deploy to Ethereum Mainnet using a clean dev-only wallet.  
1. Publish and verify code on Etherscan
1. Transfer Owner to [DAO](smart-contract-info.md)

## After Deploying

1. Add address to the [contract tracker](smart-contract-info.md)

