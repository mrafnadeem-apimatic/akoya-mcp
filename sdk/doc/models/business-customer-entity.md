
# Business Customer Entity

Customers that are commercial in nature are affiliated with a business entity

*This model accepts additional fields of type unknown.*

## Structure

`BusinessCustomerEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of business customer |
| `registeredAgents` | [`CustomerName[] \| undefined`](../../doc/models/customer-name.md) | Optional | A list of registered agents who act on behalf of the business customer |
| `registeredId` | `string \| undefined` | Optional | The registered tax identification number (TIN) or other identifier of business customer |
| `industryCode` | [`IndustryCode \| undefined`](../../doc/models/industry-code.md) | Optional | Industry code and type |
| `domicile` | [`Domicile \| undefined`](../../doc/models/domicile.md) | Optional | The country and region of the business customer's location |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "registeredAgents": [
    {
      "first": "first6",
      "middle": "middle6",
      "last": "last0",
      "prefix": "prefix8",
      "suffix": "suffix0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "registeredId": "registeredId6",
  "industryCode": {
    "type": "type8",
    "code": "code0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "domicile": {
    "region": "region2",
    "country": "country0",
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

