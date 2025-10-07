
# Investment Balance List

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentBalanceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceName` | `string \| undefined` | Optional | Name of the balance. |
| `balanceDescription` | `string \| undefined` | Optional | Description of balance. |
| `balanceType` | [`InvestmentBalanceType \| undefined`](../../doc/models/investment-balance-type.md) | Optional | The type of an investment balance. AMOUNT or PERCENTAGE. |
| `balanceValue` | `number \| undefined` | Optional | Value of balance name. |
| `balanceDate` | `string \| undefined` | Optional | Date as of this balance. |
| `currency` | [`CurrencyEntity \| undefined`](../../doc/models/currency-entity.md) | Optional | Indicates the currency code used by the account. May also include currency rate. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "balanceName": "balanceName0",
  "balanceDescription": "balanceDescription6",
  "balanceType": "AMOUNT",
  "balanceValue": 220.9,
  "balanceDate": "2016-03-13T12:52:32.123Z",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

