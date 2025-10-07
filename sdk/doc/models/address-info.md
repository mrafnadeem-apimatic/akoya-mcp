
# Address Info

*This model accepts additional fields of type unknown.*

## Structure

`AddressInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string \| undefined` | Optional | May contain full address if not separated |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `postalCode` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "line1": "line12",
  "city": "city0",
  "state": "state4",
  "postalCode": "postalCode8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

