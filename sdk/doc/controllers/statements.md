# Statements

Statements

```ts
const statementsApi = new StatementsApi(client);
```

## Class Name

`StatementsApi`

## Methods

* [Get-Statement-List](../../doc/controllers/statements.md#get-statement-list)
* [Get-Statements](../../doc/controllers/statements.md#get-statements)


# Get-Statement-List

Retrieve a list of available statements for the end-user's consented accounts. You may request a date range of up to two years of historical statements (maximum date ranges vary by provider).

The paginated response includes an array of statement information with the end-user's account id and statement details such as statement id, date, description, and status. The results also include links to GET the statement image.

```ts
async getStatementList(
  accountId: string,
  version: string,
  providerId: string,
  startTime?: string,
  endTime?: string,
  offset?: string,
  limit?: number,
  xAkoyaInteractionType?: InteractionType,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedArray>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account Identifier |
| `version` | `string` | Template, Required | Akoya major version number. Do not use minor version numbers. For instance, use v2 and not v2.2 |
| `providerId` | `string` | Template, Required | Id of provider |
| `startTime` | `string \| undefined` | Query, Optional | Start date for use in retrieval of statements (ISO 8601) |
| `endTime` | `string \| undefined` | Query, Optional | End date for use in retrieval of statements (ISO 8601) |
| `offset` | `string \| undefined` | Query, Optional | The number of items to skip before the first in the response. The default is 0.<br><br>**Default**: `'0'` |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of items to be returned in the response. The default is 50.<br><br>**Default**: `50` |
| `xAkoyaInteractionType` | [`InteractionType \| undefined`](../../doc/models/interaction-type.md) | Header, Optional | Optional but recommended header to include with each data request.<br>Allowed values are `user` or `batch`.<br>`user` indicates a request is prompted by an end-user action.<br>`batch` indicates the request is part of a batch process. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaginatedArray`](../../doc/models/paginated-array.md).

## Example Usage

```ts
const accountId = ':accountId';

const version = 'v2';

const providerId = 'mikomo';

const startTime = '03/30/2020 04:00:00';

const endTime = '03/30/2021 04:00:00';

const offset = '0';

const limit = 50;

try {
  const { result, ...httpResponse } = await statementsApi.getStatementList(
    accountId,
    version,
    providerId,
    startTime,
    endTime,
    offset,
    limit
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Start or end date value is not in the ISO 8601 format. | [`ErrorError`](../../doc/models/error-error.md) |
| 404 | 404 - Not found | [`ErrorError`](../../doc/models/error-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 408 | Request timed out (round trip call took >10 seconds). | [`ErrorError`](../../doc/models/error-error.md) |
| 500 | Catch-all exception where request was not processed due to an internal outage/issue. | [`ErrorError`](../../doc/models/error-error.md) |
| 501 | FdxVersion in header is not implemented. | [`ErrorError`](../../doc/models/error-error.md) |
| 503 | System is down for maintenance. | [`ErrorError`](../../doc/models/error-error.md) |


# Get-Statements

Retrieve a specific account statement file. Use [HTTP Accept request-header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) to specify desired content types.

For the initial launch, only PDF statements are supported. PDFs are returned in the response.

### cURL request

We recommend using the auto-generated cURL request with the {idToken}, accountId, providerId, statementId, and version with an added cURL parameter to return the output to a file. For example:

```curl
curl --request GET --url https://sandbox-products.ddp.akoya.com/statements/v2/mikomo/513815781465/P9CvLPKDaFRMbNDkhu1 --header "accept: application/pdf" --header "authorization: Bearer {idtoken}" --output example.pdf
```

```ts
async getStatements(
  accountId: string,
  version: string,
  providerId: string,
  statementId: string,
  accept?: Accept,
  xAkoyaInteractionType?: InteractionType,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account Identifier |
| `version` | `string` | Template, Required | Akoya major version number. Do not use minor version numbers. For instance, use v2 and not v2.2 |
| `providerId` | `string` | Template, Required | Id of provider |
| `statementId` | `string` | Template, Required | Statement Identifier |
| `accept` | [`Accept \| undefined`](../../doc/models/accept.md) | Header, Optional | **Default**: `Accept.EnumApplicationpdf` |
| `xAkoyaInteractionType` | [`InteractionType \| undefined`](../../doc/models/interaction-type.md) | Header, Optional | Optional but recommended header to include with each data request.<br>Allowed values are `user` or `batch`.<br>`user` indicates a request is prompted by an end-user action.<br>`batch` indicates the request is part of a batch process. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const accountId = ':accountId';

const version = 'v2';

const providerId = 'mikomo';

const statementId = 'statementId';

const accept = Accept.EnumApplicationpdf;

try {
  const { result, ...httpResponse } = await statementsApi.getStatements(
    accountId,
    version,
    providerId,
    statementId,
    accept
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Statement is processing and is not yet available. | [`ErrorError`](../../doc/models/error-error.md) |
| 404 | Account exists but contains no statements. | [`ErrorError`](../../doc/models/error-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 406 | Content Type not Supported | [`ErrorError`](../../doc/models/error-error.md) |
| 408 | Request timed out (round trip call took >10 seconds). | [`ErrorError`](../../doc/models/error-error.md) |
| 500 | Catch-all exception where request was not processed due to an internal outage/issue. | [`ErrorError`](../../doc/models/error-error.md) |
| 501 | FdxVersion in header is not implemented. | [`ErrorError`](../../doc/models/error-error.md) |
| 503 | System is down for maintenance. | [`ErrorError`](../../doc/models/error-error.md) |

