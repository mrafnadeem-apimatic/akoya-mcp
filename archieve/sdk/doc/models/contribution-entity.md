
# Contribution Entity

Describes how new contributions are distributed among the available securities.

*This model accepts additional fields of type unknown.*

## Structure

`ContributionEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `securityId` | `string \| undefined` | Optional | Unique identifier of security |
| `securityIdType` | [`SecurityIdType \| undefined`](../../doc/models/security-id-type.md) | Optional | Security identifier type |
| `employerMatchPercentage` | `number \| undefined` | Optional | Employer contribution match percentage |
| `employerMatchAmount` | `number \| undefined` | Optional | Employer contribution match amount |
| `employeePreTaxAmount` | `number \| undefined` | Optional | Employee pre‐tax contribution amount |
| `employeePreTaxPercentage` | `number \| undefined` | Optional | Employee pre‐tax contribution percentage |
| `employeeAfterTaxAmount` | `number \| undefined` | Optional | Employee after tax contribution amount |
| `employeeAfterTaxPercentage` | `number \| undefined` | Optional | Employee after tax contribution percentage |
| `employeeDeferPreTaxAmount` | `number \| undefined` | Optional | Employee defer pre‐tax contribution match amount |
| `employeeDeferPreTaxPercentage` | `number \| undefined` | Optional | Employee defer pre‐tax contribution match percentage |
| `employeeYearToDate` | `number \| undefined` | Optional | Employee total year to date contribution |
| `employerYearToDate` | `number \| undefined` | Optional | Employer total year to date contribution |
| `rolloverContributionPercentage` | `number \| undefined` | Optional | Rollover contribution percentage |
| `rolloverContributionAmount` | `number \| undefined` | Optional | Rollover contribution Amount |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "securityId": "securityId2",
  "securityIdType": "VALOR",
  "employerMatchPercentage": 195.92,
  "employerMatchAmount": 120.16,
  "employeePreTaxAmount": 147.12,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

