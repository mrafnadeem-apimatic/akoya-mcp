
# Balances

*This model accepts additional fields of type unknown.*

## Structure

`Balances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`BalancesAccounts[] \| undefined`](../../doc/models/containers/balances-accounts.md) | Optional | This is Array of a container for any-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accounts": [
    {
      "depositAccount": {
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
    },
    {
      "depositAccount": {
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
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

