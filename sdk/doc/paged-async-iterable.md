
# PagedAsyncIterable

An asynchronous iterable wrapper for paginated data that allows iteration over pages or individual items. It can fetch and iterate over each individual element in all the pages lazily.

This interface extends the `AsyncIterable<I>` interface.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| this | `AsyncIterable<I>` | Provides an asynchronous iterable to sequentially access all items across all pages in the paginated data. Items are fetched lazily during iteration. |
| pages | `PagedAsyncIterable<I, PagedResponse<I,P>` | Provides an asynchronous iterable over all pages in the paginated data. Pages are fetched lazily during iteration. |

## Usage Example

```ts
import { 
isCursorPagedResponse,
isLinkPagedResponse,
isNumberPagedResponse,
isOffsetPagedResponse
} from '../../../src';

try {
  // Iterating over items in all the pages.
  for await (const item of pagedAsyncIterable) {
    console.log(item);
  }

  // Iterating over all the pages.
  for await (const page of pagedAsyncIterable.pages) {
    // Iterating over items in the current page.
    for (const item of page.items) {
      console.log(item);
    }

    if (isOffsetPagedResponse(page)) {
      // Extracting the offset of the first item of this page.
      console.log(pages.offset)
    } else if (isCurosrPagedResponse(page)) {
      // Extracting cursor value that's used to fetch this page.
      console.log(pages.nextCursor)
    } else if (isNumberPagedResponse(page)) {
      // Extracting page number that's used to fetch this page.
      console.log(pages.pageNumber)
    } else if (isLinkPagedResponse(page)) {
      // Extracting next link value that's used to fetch this page.
      console.log(pages.nextLink)
    }

    // Extracting paged response body.
    console.log(page.body);
    // Extracting paged response headers.
    console.log(page.headers);
    // Extracting paged response status code.
    console.log(page.statusCode);
  }
} catch (error) {
  console.log(error);
}
```

