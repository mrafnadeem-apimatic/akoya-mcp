
# Local Tax Withholding

Amount of local income tax withheld, if any

*This model accepts additional fields of type unknown.*

## Structure

`LocalTaxWithholding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxWithheld` | `number \| undefined` | Optional | Amount of local income tax withheld |
| `localityName` | `string \| undefined` | Optional | Locality name |
| `income` | `number \| undefined` | Optional | Income amount for local tax purposes |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "taxWithheld": 97.82,
  "localityName": "localityName0",
  "income": 162.16,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

