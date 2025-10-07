
# Investment Account Info

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentAccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `investmentAccount` | [`InvestmentAccount \| undefined`](../../doc/models/investment-account.md) | Optional | Investment Account |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "investmentAccount": {
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

