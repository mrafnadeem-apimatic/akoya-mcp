
# Customer Name

*This model accepts additional fields of type unknown.*

## Structure

`CustomerName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | `string \| undefined` | Optional | First or given name. This data element may contain first & last name if not separated. |
| `middle` | `string \| undefined` | Optional | - |
| `last` | `string \| undefined` | Optional | - |
| `prefix` | `string \| undefined` | Optional | Name prefix, e.g. Mr. |
| `suffix` | `string \| undefined` | Optional | Generational or academic suffix |
| `company` | `string \| undefined` | Optional | Company name |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "first": "first2",
  "middle": "middle2",
  "last": "last4",
  "prefix": "prefix4",
  "suffix": "suffix4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

