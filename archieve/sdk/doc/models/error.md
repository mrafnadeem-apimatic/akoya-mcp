
# Error

An error entity which can be used at the API level for error responses or at the account level to indicate a problem specific to a particular account. See the error codes and descriptions defined in the latest FDX API Specification document, section 6.2 Errors

*This model accepts additional fields of type unknown.*

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number \| undefined` | Optional | Error code defined by FDX API Specification or Data Provider indicating the error situation which has occurred |
| `message` | `string \| undefined` | Optional | End user displayable information which might help the customer diagnose an error |
| `debugMessage` | `string \| undefined` | Optional | Message used to debug the root cause of the error. Contents should not be used in consumer's business logic. Can change at any time and should only be used for consumer to communicate with the data provider about an issue. Provider can include an error GUID in message for their use. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "code": 162,
  "message": "message4",
  "debugMessage": "debugMessage6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

