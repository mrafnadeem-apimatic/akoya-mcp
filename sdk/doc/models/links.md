
# Links

*This model accepts additional fields of type unknown.*

## Structure

`Links`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `next` | [`HrefLink \| undefined`](../../doc/models/href-link.md) | Optional | - |
| `prev` | [`HrefLink \| undefined`](../../doc/models/href-link.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "next": {
    "href": "href4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "prev": {
    "href": "href8",
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

