
# Items

*This model accepts additional fields of type unknown.*

## Structure

`Items`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `costBasis` | `number \| undefined` | Optional | Total amount of money spent acquiring this lot including any fees or commission expenses incurred. |
| `currentValue` | `number \| undefined` | Optional | Lot market value |
| `originalPurchaseDate` | `string \| undefined` | Optional | Lot acquired date. |
| `positionType` | [`PositionType \| undefined`](../../doc/models/position-type.md) | Optional | LONG, SHORT. |
| `purchasedPrice` | `number \| undefined` | Optional | Original purchase price. |
| `quantity` | `number \| undefined` | Optional | Lot quantity. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "costBasis": 179.8,
  "currentValue": 247.76,
  "originalPurchaseDate": "2016-03-13T12:52:32.123Z",
  "positionType": "LONG",
  "purchasedPrice": 31.42,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

