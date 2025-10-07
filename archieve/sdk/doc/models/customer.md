
# Customer

Represents a customer (end-user)

*This model accepts additional fields of type unknown.*

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| undefined` | Optional | Long-term persistent identity of the end-user. This identity must be unique to the owning institution |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | The end-user's name |
| `addresses` | [`AddressInfo[] \| undefined`](../../doc/models/address-info.md) | Optional | An array of the end-user's physical mail addresses<br><br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `telephones` | `string[] \| null \| undefined` | Optional | Optional array of telephone numbers |
| `email` | `string[] \| undefined` | Optional | An array of the end-user's electronic mail addresses |
| `accounts` | `string[] \| null \| undefined` | Optional | Optional list of accounts associated with the customer |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "customerId": "customerId2",
  "name": {
    "first": "first6",
    "middle": "middle6",
    "last": "last0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "addresses": [
    {
      "line1": "line16",
      "city": "city4",
      "state": "state0",
      "postalCode": "postalCode4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "telephones": [
    "telephones2",
    "telephones3",
    "telephones4"
  ],
  "email": [
    "email0",
    "email1",
    "email2"
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

