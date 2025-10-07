
# Deposit Balance Info

*This model accepts additional fields of type unknown.*

## Structure

`DepositBalanceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `depositAccount` | [`DepositBalances \| undefined`](../../doc/models/deposit-balances.md) | Optional | Data elements included with balances specific to deposit accounts |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "depositAccount": {
    "accountId": "accountId0",
    "accountType": "accountType0",
    "accountNumberDisplay": "accountNumberDisplay6",
    "currency": {
      "currencyCode": "currencyCode0",
      "currencyRate": 27.48,
      "originalCurrencyCode": "originalCurrencyCode4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "description": "description0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

