
# Taxlots Response

*This model accepts additional fields of type unknown.*

## Structure

`TaxlotsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| undefined` | Optional | Corresponds to AccountId in Account |
| `holding` | [`Holding \| undefined`](../../doc/models/holding.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId6",
  "holding": {
    "holdingId": "holdingId0",
    "securityId": "securityId2",
    "securityIdType": "VALOR",
    "taxLots": [
      {
        "costBasis": 131.38,
        "currentValue": 199.34,
        "originalPurchaseDate": "2016-03-13T12:52:32.123Z",
        "positionType": "LONG",
        "purchasedPrice": 176.16,
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      {
        "costBasis": 131.38,
        "currentValue": 199.34,
        "originalPurchaseDate": "2016-03-13T12:52:32.123Z",
        "positionType": "LONG",
        "purchasedPrice": 176.16,
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      {
        "costBasis": 131.38,
        "currentValue": 199.34,
        "originalPurchaseDate": "2016-03-13T12:52:32.123Z",
        "positionType": "LONG",
        "purchasedPrice": 176.16,
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

