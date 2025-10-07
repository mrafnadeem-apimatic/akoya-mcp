
# Debt Security Entity

Information about the debt security specific to the type of security

*This model accepts additional fields of type unknown.*

## Structure

`DebtSecurityEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parValue` | `number \| undefined` | Optional | Par value amount |
| `debtType` | [`DebtType \| undefined`](../../doc/models/debt-type.md) | Optional | Debt type |
| `debtClass` | [`DebtClass \| undefined`](../../doc/models/debt-class.md) | Optional | Classification of debt |
| `couponRate` | `number \| undefined` | Optional | Bond coupon rate for next closest call date |
| `couponDate` | `string \| undefined` | Optional | Maturity date for next coupon |
| `couponMatureFrequency` | [`CouponMatureFrequency \| undefined`](../../doc/models/coupon-mature-frequency.md) | Optional | When coupons mature |
| `callPrice` | `number \| undefined` | Optional | Bond call price |
| `yieldToCall` | `number \| undefined` | Optional | Yield to next call |
| `callDate` | `string \| undefined` | Optional | Next call date |
| `callType` | [`CallType \| undefined`](../../doc/models/call-type.md) | Optional | Type of next call |
| `yieldToMaturity` | `number \| undefined` | Optional | Yield to maturity |
| `bondMaturityDate` | `string \| undefined` | Optional | Bond Maturity date |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "parValue": 18.14,
  "debtType": "ASSET",
  "debtClass": "CORPORATE",
  "couponRate": 229.02,
  "couponDate": "2016-03-13T12:52:32.123Z",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

