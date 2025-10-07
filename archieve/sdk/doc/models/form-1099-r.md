
# Form 1099 R

Distributions from Pensions, Annuities, Retirement or Profit-Sharing Plans, IRAs, Insurance Contracts, etc.

*This model accepts additional fields of type unknown.*

## Structure

`Form1099R`

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
| `allocableToIrr` | `number \| undefined` | Optional | Box 10, Amount allocable to IRR within 5 years |
| `firstYearOfRoth` | `number \| undefined` | Optional | Box 11, First year of designated Roth contributions. A four-digit year. (Like `TaxYear` definition, but lower minimum since first year of Roth IRAs was 1997)<br><br>**Constraints**: `>= 1997`, `<= 2050` |
| `recipientAccountNumber` | `string \| undefined` | Optional | Account number |
| `grossDistribution` | `number \| undefined` | Optional | Box 1, Gross distribution |
| `taxableAmount` | `number \| undefined` | Optional | Box 2a, Taxable amount |
| `taxableAmountNotDetermined` | `boolean \| undefined` | Optional | Box 2b, Taxable amount not determined |
| `totalDistribution` | `boolean \| undefined` | Optional | Box 2c, Total distribution |
| `capitalGain` | `number \| undefined` | Optional | Box 3, Capital gain |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `employeeContributions` | `number \| undefined` | Optional | Box 5, Employee contributions |
| `netUnrealizedAppreciation` | `number \| undefined` | Optional | Box 6, Net unrealized appreciation |
| `distributionCodes` | `string[] \| undefined` | Optional | Box 7, Distribution codes |
| `iraSepSimple` | `boolean \| undefined` | Optional | Box 7b, IRA/SEP/SIMPLE |
| `otherAmount` | `number \| undefined` | Optional | Box 8, Other |
| `otherPercent` | `number \| undefined` | Optional | Box 8, Other percent |
| `yourPercentOfTotal` | `number \| undefined` | Optional | Box 9a, Your percent of total distribution |
| `totalEmployeeContributions` | `number \| undefined` | Optional | Box 9b, Total employee contributions |
| `foreignAccountTaxCompliance` | `boolean \| undefined` | Optional | Box 12, FATCA filing requirement |
| `dateOfPayment` | `string \| undefined` | Optional | Box 13, Date of payment |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 14-19, State and Local tax withholding |
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
  "firstYearOfRoth": 2020,
  "dateOfPayment": "2021-07-15",
  "corrected": false,
  "accountId": "accountId8",
  "taxFormId": "taxFormId6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

