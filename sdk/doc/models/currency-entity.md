
# Currency Entity

Indicates the currency code used by the account. May also include currency rate.

*This model accepts additional fields of type unknown.*

## Structure

`CurrencyEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | Iso 4217 currency code. |
| `currencyRate` | `number \| undefined` | Optional | Currency rate between original and converted currency. |
| `originalCurrencyCode` | `string \| undefined` | Optional | Iso 4217 currency code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "currencyCode": "currencyCode4",
  "currencyRate": 203.06,
  "originalCurrencyCode": "originalCurrencyCode0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

