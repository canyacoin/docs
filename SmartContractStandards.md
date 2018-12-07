# Smart Contract Standards

> Standards for deploying smart contracts on Ethereum for the CanYa Project

## General

1. Comment as per [Solidity standards](https://solidity.readthedocs.io/en/v0.5.0/layout-of-source-files.html#comments) 

## Developer Environement

1. Use the latest [Solc version](https://github.com/ethereum/solidity/releases)
1. Initialise node `package.json` and `gitlab-ci.yml` files as outlined in [SmartContracts](https://github.com/canyaio/Resources/tree/master/SmartContracts), using `.gitignore` as provided
1. Use `VSCode` with [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension in order to provide Intellisense and force Linting
1. Frequently run `Solidity - compile all contracts` functionality to test contract compilation

### Proxies

### Owner

Ensure that all contracts are owned:

```
// Owned Contract
contract Owned {
  modifier onlyOwner { require(msg.sender == owner); _; }
  address public owner = msg.sender;
  event NewOwner(address indexed old, address indexed current);
  function setOwner(address _new) onlyOwner public { emit NewOwner(owner, _new); owner = _new; }
}

// Smart Contract
contract thisContract is Owned {
}
```

## Testing Environment

1. Create automatically executing unit tests with `truffle` and `gitlab-ci` 
1. Utilise libraries and comprehensively test code, utilising test libraries and validating using `solidity-coverage`
1. Integration test with [Remix](https://remix.ethereum.org) on Ropsten

## Deploying Mainnet

1. Deploy to Ethereum Mainnet using a clean dev-only wallet.  
1. Publish and verify code on Etherscan
1. Transfer Owner to [DAO](https://github.com/canyaio/Resources/tree/master/SmartContracts)

## After Deploying

1. Add address to the [contract tracker](https://github.com/canyaio/Resources/tree/master/SmartContracts)

