
# Description and Amount

Description and amount pair used on IRS W-2, etc.

*This model accepts additional fields of type unknown.*

## Structure

`DescriptionAndAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Description |
| `amount` | `number \| undefined` | Optional | Amount |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "description": "description0",
  "amount": 4.82,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

