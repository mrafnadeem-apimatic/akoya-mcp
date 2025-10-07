
# Pension Source Entity

Information about a pension source.

*This model accepts additional fields of type unknown.*

## Structure

`PensionSourceEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | Name of the Source |
| `amount` | `number \| undefined` | Optional | Benefit Amount |
| `paymentOption` | `string \| undefined` | Optional | Form of payment |
| `asOfDate` | `string \| undefined` | Optional | Date benefit was calculated |
| `frequency` | [`Frequency \| undefined`](../../doc/models/frequency.md) | Optional | - |
| `startDate` | `string \| undefined` | Optional | Assumed retirement date ‐ As of date amount is payable |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "displayName": "displayName8",
  "amount": 9.06,
  "paymentOption": "paymentOption0",
  "asOfDate": "2016-03-13T12:52:32.123Z",
  "frequency": "ANNUALLY",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

