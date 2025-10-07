
# Asset Class Item

*This model accepts additional fields of type unknown.*

## Structure

`AssetClassItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetClass` | [`AssetClass \| undefined`](../../doc/models/asset-class.md) | Optional | - |
| `percent` | `number \| undefined` | Optional | Percentage of asset class that falls under this asset |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "assetClass": "INTLSTOCK",
  "percent": 129.54,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

