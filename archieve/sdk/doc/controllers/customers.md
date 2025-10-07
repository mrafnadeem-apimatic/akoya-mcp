# Customers

Customers

```ts
const customersApi = new CustomersApi(client);
```

## Class Name

`CustomersApi`

## Methods

* [Customer-Info](../../doc/controllers/customers.md#customer-info)
* [Get-Account-Holder](../../doc/controllers/customers.md#get-account-holder)


# Customer-Info

This product supports use cases such as payment enablement, account opening, and identity verification. Responses return information about the authorized end-user, the customer associated with the `id_token` used in the call. This information may include, but is not limited to, the customer identifier, name, email, address, and phone number.

<br>
To see the response schema, select the `200` response below. For an example payload response, see the `200` example response below the *Try it* feature.

This product requires consumer consent to share all account holder information.

> 🛑 The `id_token` should be used as the bearer token with this call.

```ts
async customerInfo(
  version: string,
  providerId: string,
  xAkoyaInteractionType?: InteractionType,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CurrentCustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `string` | Template, Required | Akoya major version number. Do not use minor version numbers. For instance, use v2 and not v2.2 |
| `providerId` | `string` | Template, Required | Id of provider |
| `xAkoyaInteractionType` | [`InteractionType \| undefined`](../../doc/models/interaction-type.md) | Header, Optional | Optional but recommended header to include with each data request.<br>Allowed values are `user` or `batch`.<br>`user` indicates a request is prompted by an end-user action.<br>`batch` indicates the request is part of a batch process. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CurrentCustomer`](../../doc/models/current-customer.md).

## Example Usage

```ts
const version = 'v2';

const providerId = 'mikomo';

try {
  const { result, ...httpResponse } = await customersApi.customerInfo(
    version,
    providerId
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

## Example Response *(as JSON)*

```json
{
  "customer": {
    "customerId": "1521963501",
    "name": {
      "first": "Philip",
      "middle": "H",
      "last": "Lovett"
    },
    "addresses": [
      {
        "line1": "7572 CHOWNING RD",
        "city": "SPRINGFIELD",
        "state": "TN",
        "postalCode": "37172-6488"
      }
    ],
    "telephones": null,
    "email": [
      "PhilipHLovett@mikomotest.com"
    ],
    "accounts": null
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 405 | Method Not Allowed | `ApiError` |
| 408 | Request timed out (round trip call took >10 seconds). | [`ErrorError`](../../doc/models/error-error.md) |


# Get-Account-Holder

This product supports use cases such as payment enablement, account opening, identity verification,or lending & credit enhancement. Responses return information about the authorized consumer, the customer associated with the `id_token` used in the call, and the relationship specific to the provided `accountId`.

> 📌 Please note!
> 
> This endpoint provides additional information which may not be required for your use case, making it inefficient compared to the [/customer info](https://docs.akoya.com/reference/customer-info) endpoint. Please refer to to the [Customers guide](https://docs.akoya.com/reference/customers) for more information about this endpoint.

Get account holder information. Based on FDX 5.2.1.

This product requires consumer consent to share all account holder information.

> 🛑 The `id_token` should be used as the bearer token with this call.

```ts
async getAccountHolder(
  accountId: string,
  version: string,
  providerId: string,
  xAkoyaInteractionType?: InteractionType,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountContactEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Account Identifier |
| `version` | `string` | Template, Required | Akoya major version number. Do not use minor version numbers. For instance, use v2 and not v2.2 |
| `providerId` | `string` | Template, Required | Id of provider |
| `xAkoyaInteractionType` | [`InteractionType \| undefined`](../../doc/models/interaction-type.md) | Header, Optional | Optional but recommended header to include with each data request.<br>Allowed values are `user` or `batch`.<br>`user` indicates a request is prompted by an end-user action.<br>`batch` indicates the request is part of a batch process. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountContactEntity`](../../doc/models/account-contact-entity.md).

## Example Usage

```ts
const accountId = ':accountId';

const version = 'v2';

const providerId = 'mikomo';

try {
  const { result, ...httpResponse } = await customersApi.getAccountHolder(
    accountId,
    version,
    providerId
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

## Example Response *(as JSON)*

```json
{
  "holders": [
    {
      "customerId": "string",
      "name": {
        "first": "string",
        "middle": "string",
        "last": "string",
        "prefix": "string",
        "suffix": "string",
        "company": "string"
      },
      "businessCustomer": {
        "name": "string",
        "registeredAgents": [
          {
            "first": "string",
            "middle": "string",
            "last": "string",
            "prefix": "string",
            "suffix": "string",
            "company": "string"
          }
        ],
        "registeredId": "string",
        "industryCode": {
          "type": "string",
          "code": "string"
        },
        "domicile": {
          "region": "string",
          "country": "string"
        }
      },
      "addresses": [
        {
          "line1": "string",
          "line2": "string",
          "line3": "string",
          "city": "string",
          "state": "string",
          "region": "string",
          "postalCode": "string",
          "country": "string",
          "type": "string"
        }
      ],
      "telephones": [
        "string"
      ],
      "email": [
        "string"
      ],
      "accounts": [
        "account-id-1",
        "account-id-2"
      ],
      "relationship": "AUTHORIZED_USER"
    }
  ],
  "emails": [
    "string"
  ],
  "addresses": [
    {
      "line1": "string",
      "line2": "string",
      "line3": "string",
      "city": "string",
      "state": "string",
      "region": "string",
      "postalCode": "string",
      "country": "US",
      "type": "string"
    }
  ],
  "telephones": [
    {
      "type": "HOME",
      "country": "US",
      "number": "8675309"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | [`ErrorError`](../../doc/models/error-error.md) |
| 405 | Method Not Allowed | `ApiError` |
| 408 | Request timed out (round trip call took >10 seconds). | [`ErrorError`](../../doc/models/error-error.md) |

