
# Line Item

*This model accepts additional fields of type unknown.*

## Structure

`LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The amount of money attributable to this line item |
| `checkNumber` | `number \| undefined` | Optional | Check number |
| `description` | `string \| undefined` | Optional | The description of the line item |
| `imageIds` | `string[] \| undefined` | Optional | Array of image identifiers (unique to transaction) used to retrieve images of check or transaction receipt. |
| `links` | [`HateoasLink[] \| undefined`](../../doc/models/hateoas-link.md) | Optional | Links (unique to this Transaction) used to retrieve images of checks or transaction receipts, or invoke other APIs |
| `memo` | `string \| undefined` | Optional | Secondary item description |
| `reference` | `string \| undefined` | Optional | A reference number |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "amount": 197.28,
  "checkNumber": 134.12,
  "description": "description6",
  "imageIds": [
    "imageIds5",
    "imageIds6",
    "imageIds7"
  ],
  "links": [
    {
      "href": "href6",
      "action": "PATCH",
      "types": [
        "application/json",
        "application/pdf"
      ],
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "href": "href6",
      "action": "PATCH",
      "types": [
        "application/json",
        "application/pdf"
      ],
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "href": "href6",
      "action": "PATCH",
      "types": [
        "application/json",
        "application/pdf"
      ],
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

