
# Other Security Entity

Information about the security specific to the type of security

*This model accepts additional fields of type unknown.*

## Structure

`OtherSecurityEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `typeDescription` | `string \| undefined` | Optional | Description of Other Security |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "typeDescription": "typeDescription6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

