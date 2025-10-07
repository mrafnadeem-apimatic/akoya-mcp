
# Insurance Transaction Info

*This model accepts additional fields of type unknown.*

## Structure

`InsuranceTransactionInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `insuranceTransaction` | [`InsuranceTransaction \| undefined`](../../doc/models/insurance-transaction.md) | Optional | Insurance transactions |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "insuranceTransaction": {
    "accountId": "accountId4",
    "amount": 123.56,
    "category": "category2",
    "debitCreditMemo": "DEBIT",
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

