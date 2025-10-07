
# Form 1099 Div

Dividends and Distributions

*This model accepts additional fields of type unknown.*

## Structure

`Form1099Div`

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
| `ordinaryDividends` | `number \| undefined` | Optional | Box 1a, Total ordinary dividends |
| `qualifiedDividends` | `number \| undefined` | Optional | Box 1b, Qualified dividends |
| `totalCapitalGain` | `number \| undefined` | Optional | Box 2a, Total capital gain distributions |
| `unrecaptured1250Gain` | `number \| undefined` | Optional | Box 2b, Unrecaptured Section 1250 gain |
| `section1202Gain` | `number \| undefined` | Optional | Box 2c, Section 1202 gain |
| `collectiblesGain` | `number \| undefined` | Optional | Box 2d, Collectibles (28%) gain |
| `section897Dividends` | `number \| undefined` | Optional | Box 2e, Section 897 ordinary dividends |
| `section897CapitalGain` | `number \| undefined` | Optional | Box 2f, Section 897 capital gain |
| `nonTaxableDistribution` | `number \| undefined` | Optional | Box 3, Nondividend distributions |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `section199ADividends` | `number \| undefined` | Optional | Box 5, Section 199A dividends |
| `investmentExpenses` | `number \| undefined` | Optional | Box 6, Investment expenses |
| `foreignTaxPaid` | `number \| undefined` | Optional | Box 7, Foreign tax paid |
| `foreignCountry` | `string \| undefined` | Optional | Box 8, Foreign country or U.S. possession |
| `cashLiquidation` | `number \| undefined` | Optional | Box 9, Cash liquidation distributions |
| `nonCashLiquidation` | `number \| undefined` | Optional | Box 10, Noncash liquidation distributions |
| `foreignAccountTaxCompliance` | `boolean \| undefined` | Optional | Box 11, FATCA filing requirement |
| `taxExemptInterestDividend` | `number \| undefined` | Optional | Box 12, Exempt-interest dividends |
| `specifiedPabInterestDividend` | `number \| undefined` | Optional | Box 13, Specified private activity bond interest dividends |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 14-16, State and Local tax withholding |
| `foreignIncomes` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Foreign income information |
| `stateTaxExemptIncomes` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Tax exempt income state information |
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

