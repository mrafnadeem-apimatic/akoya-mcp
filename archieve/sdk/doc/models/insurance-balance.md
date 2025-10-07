
# Insurance Balance

*This model accepts additional fields of type unknown.*

## Structure

`InsuranceBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `insuranceAccount` | [`InsuranceBalances \| undefined`](../../doc/models/insurance-balances.md) | Optional | Data elements included with balances specific to insurance accounts |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "insuranceAccount": {
    "accountId": "accountId8",
    "accountType": "accountType8",
    "accountNumberDisplay": "accountNumberDisplay4",
    "currency": {
      "currencyCode": "currencyCode0",
      "currencyRate": 27.48,
      "originalCurrencyCode": "originalCurrencyCode4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "description": "description8",
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

