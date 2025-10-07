
# Health Insurance Coverage

Used on Form 1095-A Part III

*This model accepts additional fields of type unknown.*

## Structure

`HealthInsuranceCoverage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enrollmentPremium` | `number \| undefined` | Optional | Monthly enrollment premiums |
| `slcspPremium` | `number \| undefined` | Optional | Monthly second lowest cost silver plan (SLCSP) premium |
| `advancePremiumTaxCreditPayment` | `number \| undefined` | Optional | Monthly advance payment of premium tax credit |
| `month` | [`CoverageMonth \| undefined`](../../doc/models/coverage-month.md) | Optional | Month of coverage |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "enrollmentPremium": 139.74,
  "slcspPremium": 163.34,
  "advancePremiumTaxCreditPayment": 197.06,
  "month": "MAY",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

