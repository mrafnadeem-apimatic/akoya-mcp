
# Name

The end-user's name

*This model accepts additional fields of type unknown.*

## Structure

`Name`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | `string \| undefined` | Optional | First or given name. This data element may contain first & last name if not separated. |
| `middle` | `string \| undefined` | Optional | - |
| `last` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "first": "first6",
  "middle": "middle6",
  "last": "last0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

