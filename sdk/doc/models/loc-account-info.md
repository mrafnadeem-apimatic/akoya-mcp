
# Loc Account Info

*This model accepts additional fields of type unknown.*

## Structure

`LocAccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locAccount` | [`AccountInformation \| undefined`](../../doc/models/account-information.md) | Optional | Line of Credit Account |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "locAccount": {
    "accountId": "accountId0",
    "accountType": "accountType0",
    "accountNumberDisplay": "accountNumberDisplay6",
    "currency": {
      "currencyCode": "currencyCode0",
      "currencyRate": 27.48,
      "originalCurrencyCode": "originalCurrencyCode4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "description": "description0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

