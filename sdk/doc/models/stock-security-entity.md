
# Stock Security Entity

Information about the stock security specific to the type of security

*This model accepts additional fields of type unknown.*

## Structure

`StockSecurityEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unitsStreet` | `number \| undefined` | Optional | Units in the FI's street name, positive quantity |
| `unitsUser` | `number \| undefined` | Optional | Units in user's name directly, positive  quantity |
| `reinvestDividends` | `boolean \| undefined` | Optional | Reinvest dividends |
| `stockType` | [`StockType \| undefined`](../../doc/models/stock-type.md) | Optional | - |
| `yield` | `number \| undefined` | Optional | Current yield |
| `yieldAsOfDate` | `string \| undefined` | Optional | Yield as-of date |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "unitsStreet": 117.56,
  "unitsUser": 92.52,
  "reinvestDividends": false,
  "stockType": "STOCK",
  "yield": 211.18,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

