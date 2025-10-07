
# Individual Name

Name of responsible individual

*This model accepts additional fields of type unknown.*

## Structure

`IndividualName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | `string \| undefined` | Optional | First name |
| `middle` | `string \| undefined` | Optional | Middle initial |
| `last` | `string \| undefined` | Optional | Last name |
| `suffix` | `string \| undefined` | Optional | Generational or academic suffix |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "first": "first2",
  "middle": "middle2",
  "last": "last4",
  "suffix": "suffix4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

