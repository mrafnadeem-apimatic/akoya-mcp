
# Name and Address

Individual or business name with address

*This model accepts additional fields of type unknown.*

## Structure

`NameAndAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string \| undefined` | Optional | Address line 1 |
| `line2` | `string \| undefined` | Optional | Address line 2 |
| `line3` | `string \| undefined` | Optional | Address line 3 |
| `city` | `string \| undefined` | Optional | City |
| `region` | `string \| undefined` | Optional | State, Province, Territory, Canton or Prefecture. From [Universal Postal Union](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) as of 2-26-2020, [S42 International Address Standards](https://www.upu.int/UPU/media/upu/documents/PostCode/S42_International-Addressing-Standards.pdf). For U.S. addresses can be 2-character code from '#/components/schemas/StateCode' |
| `postalCode` | `string \| undefined` | Optional | Postal code<br><br>**Constraints**: *Maximum Length*: `16` |
| `country` | [`Iso3166CountryCode \| undefined`](../../doc/models/iso-3166-country-code.md) | Optional | Country code |
| `name1` | `string \| undefined` | Optional | Name line 1 |
| `name2` | `string \| undefined` | Optional | Name line 2 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "line1": "line10",
  "line2": "line22",
  "line3": "line30",
  "city": "city8",
  "region": "region4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

