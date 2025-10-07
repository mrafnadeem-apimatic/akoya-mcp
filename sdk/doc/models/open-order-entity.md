
# Open Order Entity

Information on an open order.

*This model accepts additional fields of type unknown.*

## Structure

`OpenOrderEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string \| undefined` | Optional | Long term persistent identity of the order. Id for this order transaction. |
| `securityId` | `string \| undefined` | Optional | Unique identifier of the security. |
| `securityIdType` | [`SecurityIdType \| undefined`](../../doc/models/security-id-type.md) | Optional | Security identifier type |
| `symbol` | `string \| undefined` | Optional | Market symbol |
| `description` | `string \| undefined` | Optional | Description of order |
| `units` | `number \| undefined` | Optional | Number of units (shares, bonds, etc.) |
| `orderType` | [`OrderType \| undefined`](../../doc/models/order-type.md) | Optional | Type of order. |
| `orderDate` | `string \| undefined` | Optional | Order date |
| `unitPrice` | `number \| undefined` | Optional | Unit price |
| `unitType` | [`UnitType \| undefined`](../../doc/models/unit-type.md) | Optional | Type of unit. |
| `orderDuration` | [`OrderDuration \| undefined`](../../doc/models/order-duration.md) | Optional | This order is good for DAY, GOODTILLCANCEL, IMMEDIATE |
| `subAccount` | [`SubAccount \| undefined`](../../doc/models/sub-account.md) | Optional | - |
| `limitPrice` | `number \| undefined` | Optional | Limit Price |
| `stopPrice` | `number \| undefined` | Optional | Stop price |
| `inv401KSource` | [`Inv401KSource \| undefined`](../../doc/models/inv-401-k-source.md) | Optional | For 401(k) accounts, source of money for this order. Default if not present is OTHERNONVEST. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "orderId": "orderId4",
  "securityId": "securityId6",
  "securityIdType": "VALOR",
  "symbol": "symbol0",
  "description": "description2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

