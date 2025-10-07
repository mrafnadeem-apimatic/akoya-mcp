
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](../doc/partial-logging-options.md) | Logging Configuration to enable logging |
| authorizationCodeAuthCredentials | [`AuthorizationCodeAuthCredentials`](auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

The API client can be initialized as follows:

```ts
import { Client, Environment, LogLevel } from 'akoya';

const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri'
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

