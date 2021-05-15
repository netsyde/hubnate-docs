## Functions
# # # createPool
```solidity
  function createPool(
    address _token,
    address _ticketToken,
    uint256 _costPerTicket
  ) external onlyOwner() returns(uint256 poolId)
```
Creates a pool with the specified parameters.

#### Parameters:
| Name | Type | Description |
| :--- | :--- | :------------------------------------------------------------------- | 
|`_token` | address | Donate token address
|`_ticketToken` | address | CT-token address
|`_costPerTicket` | uint24 | Cost per ticket

#### Return values:
| Name | Type | Description |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`poolId`| uint256 | Id of the created pool

### donate
```solidity
  function donate(
    uint256 _seed,
    uint256 _poolId,
    uint256 _numberOfTickets
  ) external
```
Allows you to make donations

#### Parameters:
| Name | Type | Description |
| :--- | :--- | :------------------------------------------------------------------- |
|`_seed` | uint256 | Seed
|`_poolId` | uint256 | Pool ID
|`_numberOfTickets` | uint256 | Number of tickets

### donateDistribution
```solidity
  function donateDistribution(
    bytes32 _requestId,
    uint256 _randomness,
    uint256 _poolId,
    uint256 _donateId
  ) external onlyRandomGenerator()
```
Distributes the donate using a random number. Called by [**Random generator**](/reference/core/RandomNumberConsumer).

#### Parameters:
| Name | Type | Description |
| :--- | :--- | :------------------------------------------------------------------- | 
|`_requestId` | bytes32 | ID randomness request
|`_randomness` | uint256 | Random number
|`_poolId` | uint256 | Pool ID
|`_donateId` | uint256 | Donate ID


### claimTickets
```solidity
  function claimTickets(
    uint256 _poolId,
    uint256 _donateId
  ) external
```
Allows you to collect CT-tokens after making a donation.

#### Parameters:
| Name | Type | Description |
| :--- | :--- | :------------------------------------------------------------------- | 
|`_poolId` | uint256 | Pool ID
|`_donateId` | uint256 | Donate ID