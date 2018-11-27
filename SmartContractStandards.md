# Smart Contract Standards

> Standards for deploying smart contracts on Ethereum for the CanYa Project

## Developer Environement

1. Use the latest [solidity environment](https://github.com/ethereum/solidity/releases)

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

1. Test with [Remix](https://remix.ethereum.org) or VSCode
2. Test on Ropsten

## Deploying Mainnet

1. Deploy to Ethereum Mainnet
2. Publish and verify code on Etherscan
3. Transfer Owner to [DAO](https://github.com/canyaio/Resources/tree/master/SmartContracts)

## After Deploying

1. Add address to []()

