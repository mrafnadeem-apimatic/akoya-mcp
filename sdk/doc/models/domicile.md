
# Domicile

The country and region of the business customer's location

*This model accepts additional fields of type unknown.*

## Structure

`Domicile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `region` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "region": "region4",
  "country": "country2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

