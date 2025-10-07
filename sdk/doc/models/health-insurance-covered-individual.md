
# Health Insurance Covered Individual

Used on Form 1095-B Part IV and Form 1095-C Part III

*This model accepts additional fields of type unknown.*

## Structure

`HealthInsuranceCoveredIndividual`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`IndividualName \| undefined`](../../doc/models/individual-name.md) | Optional | Name of responsible individual |
| `tin` | `string \| undefined` | Optional | Social security number or other TIN |
| `dateOfBirth` | `string \| undefined` | Optional | Date of birth |
| `coveredAll12Months` | `boolean \| undefined` | Optional | Covered all 12 months |
| `coveredMonths` | [`MonthAbbreviation[] \| undefined`](../../doc/models/month-abbreviation.md) | Optional | Months covered |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "dateOfBirth": "2021-07-15",
  "name": {
    "first": "first6",
    "middle": "middle6",
    "last": "last0",
    "suffix": "suffix0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "tin": "tin4",
  "coveredAll12Months": false,
  "coveredMonths": [
    "FEB",
    "MAR"
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

