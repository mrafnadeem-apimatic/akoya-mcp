
# Loan Account Info

*This model accepts additional fields of type unknown.*

## Structure

`LoanAccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loanAccount` | [`LoanAccount \| undefined`](../../doc/models/loan-account.md) | Optional | Loan Account |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "loanAccount": {
    "accountId": "accountId6",
    "accountType": "accountType6",
    "accountNumberDisplay": "accountNumberDisplay2",
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

