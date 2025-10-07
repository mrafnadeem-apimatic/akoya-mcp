
# Vesting

*This model accepts additional fields of type unknown.*

## Structure

`Vesting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vestedQuantity` | `number \| undefined` | Optional | Vested quantity (Vested shares total qty of vesting tranche) |
| `vestedValue` | `number \| undefined` | Optional | Vested balance at grant (aggregate of all vestings) |
| `vestingDate` | `string \| undefined` | Optional | - |
| `vestExpireDate` | `string \| undefined` | Optional | - |
| `vestedStatus` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "vestedQuantity": 86.14,
  "vestedValue": 183.4,
  "vestingDate": "2016-03-13T12:52:32.123Z",
  "vestExpireDate": "2016-03-13T12:52:32.123Z",
  "vestedStatus": "vestedStatus6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

