
# Form 1099 Int

Interest Income

*This model accepts additional fields of type unknown.*

## Structure

`Form1099Int`

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
| `foreignAccountTaxCompliance` | `boolean \| undefined` | Optional | FATCA filing requirement |
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `payerRtn` | `string \| undefined` | Optional | Payer's RTN |
| `interestIncome` | `number \| undefined` | Optional | Box 1, Interest income |
| `earlyWithdrawalPenalty` | `number \| undefined` | Optional | Box 2, Early withdrawal penalty |
| `usBondInterest` | `number \| undefined` | Optional | Box 3, Interest on U.S. Savings Bonds and Treasury obligations |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `investmentExpenses` | `number \| undefined` | Optional | Box 5, Investment expenses |
| `foreignTaxPaid` | `number \| undefined` | Optional | Box 6, Foreign tax paid |
| `foreignCountry` | `string \| undefined` | Optional | Box 7, Foreign country or U.S. possession |
| `taxExemptInterest` | `number \| undefined` | Optional | Box 8, Tax-exempt interest |
| `specifiedPabInterest` | `number \| undefined` | Optional | Box 9, Specified private activity bond interest |
| `marketDiscount` | `number \| undefined` | Optional | Box 10, Market discount |
| `bondPremium` | `number \| undefined` | Optional | Box 11, Bond premium |
| `usBondPremium` | `number \| undefined` | Optional | Box 12, Bond premium on Treasury obligations |
| `taxExemptBondPremium` | `number \| undefined` | Optional | Box 13, Bond premium on tax-exempt bond |
| `cusipNumber` | `string \| undefined` | Optional | Box 14, Tax-exempt bond CUSIP no. |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 15-17, State and Local tax withholding |
| `foreignIncomes` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Supplemental foreign income amount information (description is country) |
| `stateTaxExemptIncome` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Supplemental tax-exempt income by state (description is state) |
| `secondTinNotice` | `boolean \| undefined` | Optional | Second TIN Notice |
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
  "accountId": "accountId2",
  "taxFormId": "taxFormId0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

