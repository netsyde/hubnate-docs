
## Функции
### createPool
```solidity
  function createPool(
    address _token,
    address _ticketToken,
    uint256 _costPerTicket
  ) external onlyOwner() returns(uint256 poolId)
```
Создает пул, с указанными параметрами.

#### Параметры:
| Название | Тип | Описание                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | Токен, в котором будет совершаться донат
|`_ticketToken` | address | Шанс-токен, который будут получать за донат
|`_costPerTicket` | uint24 | Цена за билет

#### Возвращаемые значения:
| Название                           | Тип          | Описание                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`poolId`| uint256 | Id созданного пула

### donate
```solidity
  function donate(
    uint256 _seed,
    uint256 _poolId,
    uint256 _numberOfTickets
  ) external
```
Позволяет совершать донаты

#### Параметры:
| Название | Тип | Описание                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_seed` | uint256 | Сид
|`_poolId` | uint256 | ID пула
|`_numberOfTickets` | uint256 | Количество билетов для доната

### donateDistribution
```solidity
  function donateDistribution(
    bytes32 _requestId,
    uint256 _randomness,
    uint256 _poolId,
    uint256 _donateId
  ) external onlyRandomGenerator()
```
Распределяет донат, используя рандомное число. Вызывается [**Рандом-генератором**](/reference/core/RandomNumberConsumer).

#### Параметры:
| Название | Тип | Описание                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_requestId` | bytes32 | ID запроса рандомности
|`_randomness` | uint256 | Случайное число
|`_poolId` | uint256 | ID пула
|`_donateId` | uint256 | ID доната


### claimTickets
```solidity
  function claimTickets(
    uint256 _poolId,
    uint256 _donateId
  ) external
```
Позволяет забрать CT-токены после совершения доната.

#### Параметры:
| Название | Тип | Описание                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_poolId` | uint256 | ID пула
|`_donateId` | uint256 | ID доната

