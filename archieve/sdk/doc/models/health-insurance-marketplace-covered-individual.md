
# Health Insurance Marketplace Covered Individual

Used on Form 1095-A Part II

*This model accepts additional fields of type unknown.*

## Structure

`HealthInsuranceMarketplaceCoveredIndividual`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Covered individual name |
| `tin` | `string \| undefined` | Optional | Covered individual SSN |
| `dateOfBirth` | `string \| undefined` | Optional | Covered individual date of birth |
| `policyStartDate` | `string \| undefined` | Optional | Coverage start date |
| `policyTerminationDate` | `string \| undefined` | Optional | Coverage termination date |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "dateOfBirth": "2021-07-15",
  "policyStartDate": "2021-07-15",
  "policyTerminationDate": "2021-07-15",
  "name": "name2",
  "tin": "tin8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

