
# Oauth Token

OAuth 2 Authorization endpoint response

*This model accepts additional fields of type unknown.*

## Structure

`OauthToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idToken` | `string` | Required | ID Token |
| `tokenType` | `string` | Required | Type of access token |
| `expiresIn` | `bigint \| undefined` | Optional | Time in seconds before the access token expires |
| `scope` | `string \| undefined` | Optional | List of scopes granted<br>This is a space-delimited list of strings. |
| `expiry` | `bigint \| undefined` | Optional | Time of token expiry as unix timestamp (UTC) |
| `refreshToken` | `string \| undefined` | Optional | Refresh token<br>Used to get a new access token when it expires. |
| `additionalProperties` | `Record<string, unknown \| undefined>` | Optional | - |

## Example (as JSON)

```json
{
  "id_token": "id_token6",
  "token_type": "token_type6",
  "expires_in": 74,
  "scope": "scope6",
  "expiry": 88,
  "refresh_token": "refresh_token6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

