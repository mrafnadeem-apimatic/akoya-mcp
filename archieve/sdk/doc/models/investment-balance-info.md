
# Investment Balance Info

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentBalanceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `investmentAccount` | [`InvestmentAccountWithAllDetails \| undefined`](../../doc/models/investment-account-with-all-details.md) | Optional | Data elements included with the investment product |
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

