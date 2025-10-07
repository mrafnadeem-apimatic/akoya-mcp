
# Payment Details

Payment details for some transactions

*This model accepts additional fields of type unknown.*

## Structure

`PaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `escrowAmount` | `number \| undefined` | Optional | The amount of payment applied to escrow |
| `feesAmount` | `number \| undefined` | Optional | The amount of payment applied to fees |
| `insuranceAmount` | `number \| undefined` | Optional | The amount of payment applied to life/health/accident insurance on the loan |
| `interestAmount` | `number \| undefined` | Optional | The amount of payment applied to interest |
| `pmiAmount` | `number \| undefined` | Optional | The amount of payment applied to PMI |
| `principalAmount` | `number \| undefined` | Optional | The amount of payment applied to principal |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "escrowAmount": 171.3,
  "feesAmount": 83.52,
  "insuranceAmount": 63.4,
  "interestAmount": 64.72,
  "pmiAmount": 217.98,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

