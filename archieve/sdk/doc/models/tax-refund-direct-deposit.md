
# Tax Refund Direct Deposit

IRS Form 8888 Direct Deposit Information

*This model accepts additional fields of type unknown.*

## Structure

`TaxRefundDirectDeposit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `institutionName` | `string \| undefined` | Optional | Name of institution |
| `rtn` | `string \| undefined` | Optional | Routing transit number |
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `accountNickName` | `string \| undefined` | Optional | Account nickname |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "institutionName": "institutionName6",
  "rtn": "rtn0",
  "accountNumber": "accountNumber4",
  "accountNickName": "accountNickName4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

