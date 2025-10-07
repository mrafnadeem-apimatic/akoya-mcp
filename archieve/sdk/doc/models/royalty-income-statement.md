
# Royalty Income Statement

Royalty Income Statement for IRS Form 1040 Schedule E

*This model accepts additional fields of type unknown.*

## Structure

`RoyaltyIncomeStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxYear` | `number \| undefined` | Optional | Year for which taxes are being paid<br><br>**Constraints**: `>= 2018`, `<= 2050` |
| `corrected` | `boolean \| undefined` | Optional | True to indicate this is a corrected tax form |
| `accountId` | `string \| undefined` | Optional | Long-term persistent identity of the source account. Not the account number |
| `taxFormId` | `string \| undefined` | Optional | Long-term persistent id for this tax form. Depending upon the data provider, this may be the same id as the enclosing tax statement id, or this may be a different id, or this id may be omitted. |
| `taxFormDate` | `string \| undefined` | Optional | Date of production or delivery of the tax form |
| `additionalInformation` | `string \| undefined` | Optional | Additional explanation text or content about this tax form |
| `taxFormType` | [`TypeFormType \| undefined`](../../doc/models/type-form-type.md) | Optional | Enumerated name of the tax form entity e.g. "TaxW2" |
| `issuer` | [`TaxParty \| undefined`](../../doc/models/tax-party.md) | Optional | Issuer's name, address, phone, and TIN. Issuer data need only be transmitted on enclosing TaxStatement, if it is the same on all its included tax forms. |
| `recipient` | [`TaxParty \| undefined`](../../doc/models/tax-party.md) | Optional | Recipient's name, address, phone, and TIN. Recipient data need only be transmitted on enclosing TaxStatement, if it is the same on all its included tax forms. |
| `attributes` | [`TaxFormAttribute[] \| undefined`](../../doc/models/tax-form-attribute.md) | Optional | Additional attributes for this tax form when defined fields are not available. Some specific additional attributes already defined by providers: Fields required by [IRS FIRE](https://www.irs.gov/e-file-providers/filing-information-returns-electronically-fire): Name Control, Type of Identification Number (EIN, SSN, ITIN, ATIN). (ATIN is tax ID number for pending adoptions.) Tax form provider field for taxpayer notification: Recipient Email Address. |
| `error` | [`Error \| undefined`](../../doc/models/error.md) | Optional | Present if an error was encountered while retrieving this form |
| `links` | [`HateoasLink[] \| undefined`](../../doc/models/hateoas-link.md) | Optional | Links to retrieve this form as data or image, or to invoke other APIs |
| `propertyAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Box 1a, Physical address of property (street, city, state, ZIP code) |
| `royalties` | `number \| undefined` | Optional | Box 3, Royalties received |
| `advertising` | `number \| undefined` | Optional | Box 5, Advertising |
| `auto` | `number \| undefined` | Optional | Box 6, Auto and travel |
| `cleaning` | `number \| undefined` | Optional | Box 7, Cleaning and maintenance |
| `commissions` | `number \| undefined` | Optional | Box 8, Commissions |
| `insurance` | `number \| undefined` | Optional | Box 9, Insurance |
| `legal` | `number \| undefined` | Optional | Box 10, Legal and other professional fees |
| `managementFees` | `number \| undefined` | Optional | Box 11, Management fees |
| `mortgageInterest` | `number \| undefined` | Optional | Box 12, Mortgage interest paid to banks, etc. |
| `otherInterest` | `number \| undefined` | Optional | Box 13, Other interest |
| `repairs` | `number \| undefined` | Optional | Box 14, Repairs |
| `supplies` | `number \| undefined` | Optional | Box 15, Supplies |
| `taxes` | `number \| undefined` | Optional | Box 16, Taxes |
| `utilities` | `number \| undefined` | Optional | Box 17, Utilities |
| `depletionExpense` | `number \| undefined` | Optional | Box 18, Depletion |
| `otherExpenses` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 19, Other expenses |
| `capitalExpenditures` | [`DateAndAmount[] \| undefined`](../../doc/models/date-and-amount.md) | Optional | Capital expenditures, for use in calculating Depreciation |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "taxYear": 2023,
  "taxFormDate": "2021-07-15",
  "attributes": [
    {
      "name": "nameControl",
      "value": "WILC"
    },
    {
      "name": "recipientIdType",
      "value": "EIN",
      "code": "1"
    },
    {
      "name": "recipientIdType",
      "value": "SSN",
      "code": "2"
    },
    {
      "name": "recipientIdType",
      "value": "ITIN",
      "code": "2"
    },
    {
      "name": "recipientIdType",
      "value": "ATIN",
      "code": "2"
    }
  ],
  "corrected": false,
  "accountId": "accountId8",
  "taxFormId": "taxFormId4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

