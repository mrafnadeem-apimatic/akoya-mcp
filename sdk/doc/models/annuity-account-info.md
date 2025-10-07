
# Annuity Account Info

*This model accepts additional fields of type unknown.*

## Structure

`AnnuityAccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `annuityAccount` | [`AnnuityAccount \| undefined`](../../doc/models/annuity-account.md) | Optional | Annuity Account |
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

