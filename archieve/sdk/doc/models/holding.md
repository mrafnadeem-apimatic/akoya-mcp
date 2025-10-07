
# Holding

*This model accepts additional fields of type unknown.*

## Structure

`Holding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `holdingId` | `string \| undefined` | Optional | Long term persistent identity of the holding |
| `securityId` | `string \| undefined` | Optional | Unique identifier of the security. |
| `securityIdType` | [`SecurityIdType \| undefined`](../../doc/models/security-id-type.md) | Optional | Security identifier type |
| `taxLots` | [`Items[] \| undefined`](../../doc/models/items.md) | Optional | Breakdown by tax lot.<br><br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "holdingId": "holdingId4",
  "securityId": "securityId6",
  "securityIdType": "CUSIP",
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
    }
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

