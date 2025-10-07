
# Investments Details

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentsDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`InvestmentsDetailsAccounts[] \| undefined`](../../doc/models/containers/investments-details-accounts.md) | Optional | This is Array of a container for any-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accounts": [
    {
      "investmentAccount": {
        "accountId": "accountId8",
        "accountType": "accountType8",
        "accountNumberDisplay": "accountNumberDisplay4",
        "currency": {
          "currencyCode": "currencyCode0",
          "currencyRate": 27.48,
          "originalCurrencyCode": "originalCurrencyCode4",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "description": "description8",
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
      "investmentAccount": {
        "accountId": "accountId8",
        "accountType": "accountType8",
        "accountNumberDisplay": "accountNumberDisplay4",
        "currency": {
          "currencyCode": "currencyCode0",
          "currencyRate": 27.48,
          "originalCurrencyCode": "originalCurrencyCode4",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "description": "description8",
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
      "investmentAccount": {
        "accountId": "accountId8",
        "accountType": "accountType8",
        "accountNumberDisplay": "accountNumberDisplay4",
        "currency": {
          "currencyCode": "currencyCode0",
          "currencyRate": 27.48,
          "originalCurrencyCode": "originalCurrencyCode4",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "description": "description8",
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

