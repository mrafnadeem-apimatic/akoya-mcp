
# Paginated Array

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedArray`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "links": {
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

