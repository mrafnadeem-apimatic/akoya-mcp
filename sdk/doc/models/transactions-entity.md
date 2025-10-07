
# Transactions Entity

Optionally paginated array of transactions

*This model accepts additional fields of type unknown.*

## Structure

`TransactionsEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | - |
| `transactions` | [`TransactionsEntityTransactions[] \| undefined`](../../doc/models/containers/transactions-entity-transactions.md) | Optional | This is Array of a container for any-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "links": {
    "next": {
      "href": "href4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "prev": {
      "href": "href8",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "transactions": [
    {
      "depositTransaction": {
        "accountId": "accountId0",
        "amount": 1.72,
        "category": "category8",
        "debitCreditMemo": "DEBIT",
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
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

