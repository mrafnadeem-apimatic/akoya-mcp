
# OAuth 2 Authorization Code Grant



Documentation for accessing and setting credentials for acgAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oauthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oauthClientSecret` |
| OAuthRedirectUri | `string` | OAuth 2 Redirection endpoint or Callback Uri | `oauthRedirectUri` |
| OAuthToken | `OauthToken` | Object for storing information about the OAuth token | `oauthToken` |
| OAuthClockSkew | `number` | Clock skew time in seconds applied while checking the OAuth Token expiry. | `clockSkew` |
| OAuthTokenProvider | `(lastOAuthToken: OauthToken \| undefined, authManager: AuthorizationCodeAuthManager) => Promise<OauthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oauthTokenProvider` |
| OAuthOnTokenUpdate | `(token: OauthToken) => void` | Registers a callback for token update event. | `oauthOnTokenUpdate` |



**Note:** Auth credentials can be set using `authorizationCodeAuthCredentials` object in the client.

## Usage Example

### 1\. Client Initialization

You must initialize the client with *OAuth 2.0 Authorization Code Grant* credentials as shown in the following code snippet.

```ts
import { Client, OauthToken } from 'akoya';

const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri',
    oauthOnTokenUpdate: (token: OauthToken) => {
      // Add the callback handler to perform operations like save to DB or file etc.
      // It will be triggered whenever the token gets updated
      saveTokenToDatabase(token);
    }
  },
});
```



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Authorization Code Grant*. This authorization includes the following steps

### 2\. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page.The `buildAuthorizationUrl()` method creates the URL to the authorization page.

```ts
const authUrl = client.authorizationCodeAuthManager?.buildAuthorizationUrl('akoyastate', 'mikomo');
```

### 3\. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified set in `Configuration`.

If the user approves the request, the authorization code will be sent as the `code` query string:

```
https://example.com/oauth/callback?code=XXXXXXXXXXXXXXXXXXXXXXXXX
```

If the user does not approve the request, the response contains an `error` query string:

```
https://example.com/oauth/callback?error=access_denied
```

### 4\. Authorize the client using the code

After the server receives the code, it can exchange this for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

```ts
try {
  const token = await client.authorizationCodeAuthManager?.fetchToken(authorizationCode);
  if (token) {
    client.withConfiguration({
      authorizationCodeAuthCredentials: {
        ...config.authorizationCodeAuthCredentials,
        oauthToken: token
      }
    });
  }
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

### Adding OAuth Token Update Callback

Whenever the OAuth Token gets updated, the provided callback implementation will be executed. For instance, you may use it to store your access token whenever it gets updated.

```ts
import { Client, OauthToken } from 'akoya';

const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri',
    oauthOnTokenUpdate: (token: OauthToken) => {
      // Add the callback handler to perform operations like save to DB or file etc.
      // It will be triggered whenever the token gets updated
      saveTokenToDatabase(token);
    }
  },
});
```

### Revoking the token

The access token can be revoked anytime using the following code.

```ts
try {
  await client.authorizationCodeAuthManager.revokeToken();
} catch (error) {
  // handle OAuthProviderError if needed
}
```

### Complete example



```ts
import {
  Client,
  OauthToken,
} from 'akoya';

// function for storing token to database
async function saveTokenToDatabase(token: OAuthToken) {
  // Code to save the token to the database
}

// function for loading token from database
async function loadTokenFromDatabase(): Promise<OAuthToken | undefined> {
  // Load token from the database and return it (return undefined if no token exists)
  return undefined;
}

// create a new client from configuration
const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri'
  },
});

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  client.withConfiguration({
    authorizationCodeAuthCredentials: {
      ...config.authorizationCodeAuthCredentials,
      oauthToken: previousToken
    }
  });
}
else {
    // redirect user to a page that handles authorization
}
```


