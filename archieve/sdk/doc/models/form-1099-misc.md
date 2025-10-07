
# Form 1099 Misc

Miscellaneous Income

*This model accepts additional fields of type unknown.*

## Structure

`Form1099Misc`

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
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `rents` | `number \| undefined` | Optional | Box 1, Rents |
| `royalties` | `number \| undefined` | Optional | Box 2, Royalties |
| `otherIncome` | `number \| undefined` | Optional | Box 3, Other income |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `fishingBoatProceeds` | `number \| undefined` | Optional | Box 5, Fishing boat proceeds |
| `medicalHealthPayment` | `number \| undefined` | Optional | Box 6, Medical and health care payments |
| `payerDirectSales` | `boolean \| undefined` | Optional | Box 7, Payer made direct sales of $5,000 or more of consumer products to a buyer (recipient) for resale |
| `substitutePayments` | `number \| undefined` | Optional | Box 8, Substitute payments in lieu of dividends or interest |
| `cropInsurance` | `number \| undefined` | Optional | Box 9, Crop insurance proceeds |
| `secondTinNotice` | `boolean \| undefined` | Optional | Second TIN Notice |
| `grossAttorney` | `number \| undefined` | Optional | Box 10, Gross proceeds paid to an attorney |
| `fishPurchased` | `number \| undefined` | Optional | Box 11, Fish purchased for resale |
| `section409ADeferrals` | `number \| undefined` | Optional | Box 12, Section 409A deferrals |
| `foreignAccountTaxCompliance` | `boolean \| undefined` | Optional | Box 13, FATCA filing requirement |
| `excessGolden` | `number \| undefined` | Optional | Box 14, Excess golden parachute payments |
| `nonQualifiedDeferredCompensation` | `number \| undefined` | Optional | Box 15, Nonqualified Deferred Compensation |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 16-18, State and Local tax withholding |
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
  "accountId": "accountId4",
  "taxFormId": "taxFormId2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

