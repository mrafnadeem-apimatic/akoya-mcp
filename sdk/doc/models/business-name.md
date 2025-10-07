
# Business Name

Business issuer or recipient name

*This model accepts additional fields of type unknown.*

## Structure

`BusinessName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name1` | `string \| undefined` | Optional | Name line 1 |
| `name2` | `string \| undefined` | Optional | Name line 2 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name1": "name16",
  "name2": "name20",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

