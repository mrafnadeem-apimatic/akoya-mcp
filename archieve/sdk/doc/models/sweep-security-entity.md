
# Sweep Security Entity

Information about the sweep security specific to the type of security

*This model accepts additional fields of type unknown.*

## Structure

`SweepSecurityEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentBalance` | `number \| undefined` | Optional | Balance of funds in account |
| `availableBalance` | `number \| undefined` | Optional | Balance of funds available for use |
| `balanceAsOf` | `string \| undefined` | Optional | As-of date of balances |
| `checks` | `boolean \| undefined` | Optional | Whether or not checks can be written on the account |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "currentBalance": 188.98,
  "availableBalance": 101.4,
  "balanceAsOf": "2016-03-13T12:52:32.123Z",
  "checks": false,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

