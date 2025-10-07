
# Investment Transaction Info

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentTransactionInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `investmentTransaction` | [`InvestmentTransaction \| undefined`](../../doc/models/investment-transaction.md) | Optional | Investment Transactions |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "investmentTransaction": {
    "accountId": "accountId2",
    "amount": 139.34,
    "category": "category0",
    "debitCreditMemo": "DEBIT",
    "description": "description2",
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

