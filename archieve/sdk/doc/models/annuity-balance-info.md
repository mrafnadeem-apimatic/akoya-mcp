
# Annuity Balance Info

*This model accepts additional fields of type unknown.*

## Structure

`AnnuityBalanceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `annuityAccount` | [`AnnuityBalances \| undefined`](../../doc/models/annuity-balances.md) | Optional | Data elements included with balances specific to annuity accounts |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "annuityAccount": {
    "accountId": "accountId6",
    "accountType": "accountType4",
    "accountNumberDisplay": "accountNumberDisplay0",
    "currency": {
      "currencyCode": "currencyCode0",
      "currencyRate": 27.48,
      "originalCurrencyCode": "originalCurrencyCode4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "description": "description6",
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

