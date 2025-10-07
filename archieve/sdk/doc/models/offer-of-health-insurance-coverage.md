
# Offer of Health Insurance Coverage

Health insurance coverage offer for part II of IRS Form 1095-C

*This model accepts additional fields of type unknown.*

## Structure

`OfferOfHealthInsuranceCoverage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coverageCode` | `string \| undefined` | Optional | Offer of Coverage (enter required code) |
| `requiredContribution` | `number \| undefined` | Optional | Employee required contribution |
| `section4980HCode` | `string \| undefined` | Optional | Section 4980H Safe Harbor and Other Relief (enter code) |
| `postalCode` | `string \| undefined` | Optional | Box 17, ZIP Code<br><br>**Constraints**: *Maximum Length*: `10` |
| `month` | [`CoverageMonth \| undefined`](../../doc/models/coverage-month.md) | Optional | Month |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "coverageCode": "coverageCode8",
  "requiredContribution": 234.32,
  "section4980HCode": "section4980HCode4",
  "postalCode": "postalCode2",
  "month": "NOVEMBER",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

