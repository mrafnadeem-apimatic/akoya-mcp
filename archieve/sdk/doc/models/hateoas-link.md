
# Hateoas Link

REST application constraint (Hypermedia As The Engine Of Application State)

*This model accepts additional fields of type unknown.*

## Structure

`HateoasLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | URL to invoke the action on the resource |
| `action` | [`HttpMethod \| undefined`](../../doc/models/http-method.md) | Optional | HTTP Method to use for the request |
| `types` | [`ContentType[] \| undefined`](../../doc/models/content-type.md) | Optional | Content-types that can be used in the Accept header. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "href": "https://api.fi.com/fdx/v4/accounts/12345",
  "action": "DELETE",
  "types": [
    "image/gif"
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

