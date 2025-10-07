
# Form 1042 S Recipient

Boxes 13a-j, 13l, Recipient for Form 1042-S

*This model accepts additional fields of type unknown.*

## Structure

`Form1042SRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tin` | `string \| undefined` | Optional | Issuer or recipient Tax Identification Number. Usually EIN for issuer and SSN for recipient |
| `partyType` | [`TaxPartyType \| undefined`](../../doc/models/tax-party-type.md) | Optional | Type of issuer or recipient legal entity, as "BUSINESS" or "INDIVIDUAL". Commonly BUSINESS for issuer and INDIVIDUAL for recipient |
| `individualName` | [`IndividualName \| undefined`](../../doc/models/individual-name.md) | Optional | Individual issuer or recipient name |
| `businessName` | [`BusinessName \| undefined`](../../doc/models/business-name.md) | Optional | Business issuer or recipient name |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Issuer or recipient address |
| `phone` | [`TelephoneNumberPlusExtension \| undefined`](../../doc/models/telephone-number-plus-extension.md) | Optional | Issuer or recipient telephone number |
| `email` | `string \| undefined` | Optional | Issuer or recipient email address. (Additional information, not part of IRS forms) |
| `ch3StatusCode` | `string \| undefined` | Optional | Ch. 3 status code,<br><br>* Box 12b, Withholding Agent,<br>* Box 13f, Recipient,<br>* Box 15b, Intermediary or flow-through entity,<br>* Box 16d, Payer |
| `ch4StatusCode` | `string \| undefined` | Optional | Ch. 4 status code,<br><br>* Box 12c, Withholding Agent,<br>* Box 13g, Recipient,<br>* Box 15c, Intermediary or flow-through entity,<br>* Box 16e, Payer |
| `giin` | `string \| undefined` | Optional | Agent's Global Intermediary Identification Number (GIIN),<br><br>* Box 12e, Withholding Agent,<br>* Box 13h, Recipient,<br>* Box 15e, Intermediary or flow-through entity,<br>* Box 16c, Payer |
| `foreignTin` | `string \| undefined` | Optional | Foreign tax identification number, if any,<br><br>* Box 12g, Withholding Agent,<br>* Box 13i, Recipient,<br>* Box 15g, Intermediary or flow-through entity |
| `lobCode` | `string \| undefined` | Optional | Box 13j, Recipient's LOB code, if any |
| `dateOfBirth` | `string \| undefined` | Optional | Box 13l, Recipient's date of birth |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "dateOfBirth": "2021-07-15",
  "tin": "tin8",
  "partyType": "BUSINESS",
  "individualName": {
    "first": "first0",
    "middle": "middle0",
    "last": "last4",
    "suffix": "suffix4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "businessName": {
    "name1": "name18",
    "name2": "name22",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "address": {
    "line1": "line18",
    "line2": "line20",
    "line3": "line38",
    "city": "city6",
    "region": "region2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

