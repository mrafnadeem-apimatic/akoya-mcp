
# Telephone Number

Standard for international phone numbers

*This model accepts additional fields of type unknown.*

## Structure

`TelephoneNumber`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`TelephoneNumberType \| undefined`](../../doc/models/telephone-number-type.md) | Optional | Type of phone number: HOME, BUSINESS, CELL, FAX |
| `country` | [`Iso3166CountryCode \| undefined`](../../doc/models/iso-3166-country-code.md) | Optional | Country calling codes defined by ITU-T recommendations E.123 and E.164 |
| `number` | `string \| undefined` | Optional | Telephone subscriber number defined by ITU-T recommendation E.164<br><br>**Constraints**: *Maximum Length*: `15`, *Pattern*: `\d+` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "FAX",
  "country": "CH",
  "number": "number8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

