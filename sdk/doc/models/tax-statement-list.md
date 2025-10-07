
# Tax Statement List

Tax statement list containing one or more tax statements

*This model accepts additional fields of type unknown.*

## Structure

`TaxStatementList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statements` | [`TaxStatement[] \| undefined`](../../doc/models/tax-statement.md) | Optional | The list of tax statements |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "statements": [
    {
      "taxYear": 2018,
      "taxStatementId": "taxStatementId2",
      "issuer": {
        "tin": "tin0",
        "partyType": "BUSINESS",
        "individualName": {
          "first": "first0",
          "middle": "middle0",
          "last": "last4",
          "suffix": "suffix4",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "businessName": {
          "name1": "name18",
          "name2": "name22",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "address": {
          "line1": "line18",
          "line2": "line20",
          "line3": "line38",
          "city": "city6",
          "region": "region2",
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
      "recipient": {
        "tin": "tin2",
        "partyType": "BUSINESS",
        "individualName": {
          "first": "first0",
          "middle": "middle0",
          "last": "last4",
          "suffix": "suffix4",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "businessName": {
          "name1": "name18",
          "name2": "name22",
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "address": {
          "line1": "line18",
          "line2": "line20",
          "line3": "line38",
          "city": "city6",
          "region": "region2",
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
      "taxDataType": "BASE64_PDF",
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

