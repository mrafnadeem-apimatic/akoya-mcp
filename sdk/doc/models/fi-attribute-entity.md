
# Fi Attribute Entity

Data provider-specific attribute

*This model accepts additional fields of type unknown.*

## Structure

`FiAttributeEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of attribute |
| `value` | `string \| undefined` | Optional | Value of attribute |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name6",
  "value": "value8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

