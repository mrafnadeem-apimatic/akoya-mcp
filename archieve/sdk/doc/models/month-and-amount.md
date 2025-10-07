
# Month and Amount

Month and amount pair used on IRS Form 1099-K, etc.

*This model accepts additional fields of type unknown.*

## Structure

`MonthAndAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | [`MonthAbbreviation \| undefined`](../../doc/models/month-abbreviation.md) | Optional | Month |
| `amount` | `number \| undefined` | Optional | Amount |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "month": "SEP",
  "amount": 97.94,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

