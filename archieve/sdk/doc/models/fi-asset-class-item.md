
# Fi Asset Class Item

*This model accepts additional fields of type unknown.*

## Structure

`FiAssetClassItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetClass` | `string \| undefined` | Optional | FI-specific asset class |
| `percent` | `number \| undefined` | Optional | Percentage of asset class that falls under this asset |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "assetClass": "assetClass8",
  "percent": 83.14,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

