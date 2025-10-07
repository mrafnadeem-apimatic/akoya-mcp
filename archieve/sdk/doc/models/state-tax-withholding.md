
# State Tax Withholding

Amount of state income tax withheld

*This model accepts additional fields of type unknown.*

## Structure

`StateTaxWithholding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxWithheld` | `number \| undefined` | Optional | Amount of state income tax withheld |
| `taxId` | `string \| undefined` | Optional | Filer's state tax id |
| `income` | `number \| undefined` | Optional | Income amount for state tax purposes |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "taxWithheld": 48.38,
  "taxId": "taxId0",
  "income": 15.96,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

