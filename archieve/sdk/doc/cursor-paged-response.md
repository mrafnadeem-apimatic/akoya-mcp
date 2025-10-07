
# CursorPagedResponse

This interface represents a paginated API response for cursor based pagination.

## Base Class

[`ApiResponse`](../doc/api-response.md)

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| items | `List<I>` | The list of items in the current page. |
| nextCursor | `string` | The cursor value that is used to fetch the current page. |

