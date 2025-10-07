
# Equity Grant

*This model accepts additional fields of type unknown.*

## Structure

`EquityGrant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantId` | `string \| undefined` | Optional | Unique identifier of grant |
| `grantDate` | `string \| undefined` | Optional | Date grant was given |
| `grantType` | `string \| undefined` | Optional | Type of grant |
| `seqNum` | `number \| undefined` | Optional | - |
| `grantPrice` | `number \| undefined` | Optional | Grant price |
| `grantCurrencyCode` | `string \| undefined` | Optional | Indicates the currency of grant USD vs AUD vs EUR etc (for share awards, you will still get a USD) |
| `quantityGranted` | `number \| undefined` | Optional | Number of options |
| `quantityOutstanding` | `number \| undefined` | Optional | - |
| `expirationDate` | `string \| undefined` | Optional | Date grant expires |
| `vestings` | [`Vesting[] \| undefined`](../../doc/models/vesting.md) | Optional | An array of equityGrant vestings. Provides the past, present, and future vesting schedule and percentages. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "grantId": "grantId0",
  "grantDate": "2016-03-13T12:52:32.123Z",
  "grantType": "grantType0",
  "seqNum": 140.54,
  "grantPrice": 234.06,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

