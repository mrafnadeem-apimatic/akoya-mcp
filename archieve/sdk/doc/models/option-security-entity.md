
# Option Security Entity

Information about the option security specific to the type of security

*This model accepts additional fields of type unknown.*

## Structure

`OptionSecurityEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `secured` | [`Secured \| undefined`](../../doc/models/secured.md) | Optional | How the option is secured |
| `optionType` | [`OptionType \| undefined`](../../doc/models/option-type.md) | Optional | - |
| `strikePrice` | `number \| undefined` | Optional | Strike price / Unit price |
| `expireDate` | `string \| undefined` | Optional | Expiration date of option |
| `sharesPerContract` | `number \| undefined` | Optional | Shares per contract |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "secured": "COVERED",
  "optionType": "CALL",
  "strikePrice": 0.6,
  "expireDate": "2016-03-13T12:52:32.123Z",
  "sharesPerContract": 217.4,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

